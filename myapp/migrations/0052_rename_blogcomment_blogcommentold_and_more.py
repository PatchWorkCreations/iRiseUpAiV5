# Generated by Django 4.2.11 on 2024-10-08 17:45

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0051_blogpost_blogcomment'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BlogComment',
            new_name='BlogComment',
        ),
        migrations.RenameModel(
            old_name='BlogPost',
            new_name='BlogPost',
        ),
    ]
