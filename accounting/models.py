from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Project(models.Model):
    """ project information
    """
    PENDING = 'pending'
    ACTIVE = 'active'
    ARCHIVED = 'archived'
    STATUSES = (
        (PENDING, 'Pending'),
        (ACTIVE, 'Active'),
        (ARCHIVED, 'Archived'),
    )

    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    date_started = models.DateField(null=True, blank=True)
    invoice_code = models.CharField(max_length=4, null=True, blank=True)
    
    channel_name = models.CharField(max_length=100, null=True, blank=True)
    channel_id = models.CharField(max_length=100, null=True, blank=True)

    duration = models.PositiveIntegerField(default=0)
    on_going = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=STATUSES, default=PENDING)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Invoice(models.Model):
    """ project invoice
    """
    project = models.ForeignKey('Project', null=True, on_delete=models.SET_NULL)
    
    invoice_num = models.CharField(max_length=15, null=True, blank=True)
    invoice_date = models.DateField(null=True, blank=True)
    due_date = models.DateField(null=True, blank=True)
    
    remarks = models.TextField(null=True, blank=True)
    is_sent = models.BooleanField(default=False)

    subtotal = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.invoice_num}) {self.project}"

    def _generate_invoice(self):
        """ generate invoice number based on the
            existing ones.
        """
        i = Invoice.objects.filter(project=self.project) \
            .exclude(id=self.id).values_list('invoice_num', flat=True)

        num = max([int(n.replace(f"{self.project.invoice_code}-", "")) for n in list(i) + ['0']])
        return f"{self.project.invoice_code}-{str(num + 1).zfill(settings.INVOICE_ZERO_FORMAT)}"


@receiver(post_save, sender=Invoice)
def auto_generate_invoice_id(sender, instance=None, created=False, **kwargs):
    # generate invoice ID only to new invoices and
    # not the existing ones.
    if created:
        # generate an invoice id
        instance.invoice_num = instance._generate_invoice()
        instance.save()


class InvoiceItem(models.Model):
    """ invoice items
    """
    invoice = models.ForeignKey('Invoice', null=True, on_delete=models.SET_NULL)
    description = models.TextField(null=True, blank=True)

    quantity = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    rate = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    amount = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.invoice} (#{self.id})"

    def save(self, *args, **kwargs):
        # auto-calculate the amount
        self.amount = self.quantity * self.rate
        return super(InvoiceItem, self).save(*args, **kwargs)



class Burn(models.Model):
    """ burnate details
    """
    RECCUR_BILL = 'recurring'
    ONETIME_BILL = 'onetime'

    BURN_TYPE = (
        (RECCUR_BILL, "Reccurring Bill (monthly)"),
        (ONETIME_BILL, "One-Time Expense"),
    )

    description = models.CharField(max_length=200)
    amount = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    source = models.CharField(max_length=200, null=True, blank=True)

    remarks = models.TextField(null=True, blank=True)
    burn_type = models.CharField(max_length=20, choices=BURN_TYPE, default=RECCUR_BILL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.description}"








