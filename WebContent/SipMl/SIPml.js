var __b_release_mode=true;
//var RTCPeerConnection = new RTCPeerConnection({rtcpMuxPolicy: "negotiate"});


var configuration = {
  'rtcpMuxPolicy': "negotiate",
  'iceServers': [{'url': 'stun:stun.l.google.com:19302' }]
};

 var RTCPeerConnection = new RTCPeerConnection(configuration);