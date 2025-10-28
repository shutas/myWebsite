const changeMarquee = () => {
  if (document.getElementById("marqueecontent").innerHTML === '<marquee loop="1" onmouseout="this.start();" onmouseover="this.stop();"><b>Engineer.</b></marquee>') {
    document.getElementById("marqueecontent").innerHTML = '<marquee loop="1" onmouseout="this.start();" onmouseover="this.stop();"><b>Security enthusiast.</b></marquee>';
  }
  else if (document.getElementById("marqueecontent").innerHTML === '<marquee loop="1" onmouseout="this.start();" onmouseover="this.stop();"><b>Security enthusiast.</b></marquee>') {
    document.getElementById("marqueecontent").innerHTML = '<marquee loop="1" onmouseout="this.start();" onmouseover="this.stop();"><b>Aspiring entrepreneur.</b></marquee>';
  } else {
    document.getElementById("marqueecontent").innerHTML = '<marquee loop="1" onmouseout="this.start();" onmouseover="this.stop();"><b>Engineer.</b></marquee>';
  }
}
setInterval(changeMarquee, 7000);

fetch('./.netlify/functions/lastUpdatedDate')
.then(response => response.json())
.then(response => {
  document.getElementById("lastUpdatedDate").innerHTML = response.value;
});

