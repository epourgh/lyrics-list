from django.contrib import admin

# Register your models here.
from swift_lyrics.models import Lyric, Song, Album

admin.site.register(Lyric)
admin.site.register(Song)
admin.site.register(Album)
