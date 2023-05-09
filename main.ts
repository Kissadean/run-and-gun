controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(assets.song`Ak47`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`Ak47`), music.PlaybackMode.UntilDone)
})
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
	
})
