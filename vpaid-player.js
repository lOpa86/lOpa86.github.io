// minimal-vpaid.js
(function() {
  console.log('🔥 Minimal VPAID loaded');
  
  window.getVPAIDAd = function() {
    console.log('📞 getVPAIDAd called');
    
    return {
      handshakeVersion: function(version) {
        console.log('🤝 handshakeVersion', version);
        return '2.0';
      },
      
      initAd: function(width, height, viewMode, bitrate, creativeData, env) {
        console.log('🎬 initAd', {width, height, creativeData});
        
        // Обязательно вызываем AdLoaded через setTimeout
        setTimeout(() => {
          if (this.slot && this.slot.adLoaded) {
            this.slot.adLoaded();
          }
        }, 100);
      },
      
      startAd: function() {
        console.log('▶️ startAd');
      },
      
      stopAd: function() {
        console.log('⏹️ stopAd');
      },
      
      // Минимально необходимые методы
      resizeAd: function(w, h, mode) {},
      pauseAd: function() {},
      resumeAd: function() {},
      expandAd: function() {},
      collapseAd: function() {},
      getAdVolume: function() { return 1; },
      setAdVolume: function(v) {}
    };
  };
})();