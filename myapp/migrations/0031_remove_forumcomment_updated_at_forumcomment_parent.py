# Generated by Django 4.2.11 on 2024-09-02 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0030_forumpost_dislikes_forumpost_likes_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='forumcomment',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='forumcomment',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='myapp.forumcomment'),
        ),
    ]
