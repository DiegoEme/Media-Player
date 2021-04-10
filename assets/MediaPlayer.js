
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
  }
  
  MediaPlayer.prototype.play = function () {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function () {
    this.media.pause();
  };

  export default MediaPlayer;