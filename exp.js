let video = document.getElementById('myvideo');
let audio = document.getElementById('myaudio');
let signals = document.getElementById('mysignals')
Array.from(signals.children).forEach(child => {
    // console.log(child);
    child.style.background = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`
})
let audioCtx = new window.AudioContext();
let audioElement = null;
// window.onload = async () => {
//     // console.log(await navigator.mediaDevices.enumerateDevices())
//     // navigator.mediaDevices.getUserMedia({
//     //     audio: true,
//     //     video: true
//     // }).then((stream) => {
//     // let microPhoneStream = audioCtx.createMediaStreamSource(stream);
//     // let analyserNode = audioCtx.createAnalyser();
//     // microPhoneStream.connect(analyserNode);
//     // analyserNode.connect(audioCtx.destination)
//     // let audioData = new Uint8Array(320);
//     // setInterval(() => {
//     //     analyserNode.getByteFrequencyData(audioData)
//     //     audioData.forEach((data, index) => {
//     //         // console.log(data); 
//     //         signals.children[index].style.height = `${data}px`;
//     //     })
//     // }, 100);
//     // audio.srcObject = stream;
//     // video.srcObject = stream;
//     // })

//     audioElement = new Audio('./a.mp3');
//     let audioSourceNode = audioCtx.createMediaElementSource(audioElement);
//     let analyserNode = audioCtx.createAnalyser();
//     audioSourceNode.connect(analyserNode);
//     analyserNode.connect(audioCtx.destination)
//     let audioData = new Uint8Array(640);
//     setInterval(() => {
//         analyserNode.getByteFrequencyData(audioData)
//         audioData.forEach((data, index) => {
//             // console.log(data); 
//             signals.children[index].style.height = `${data}px`;
//         })
//     }, 100);
//     audio.src = audioElement;
//     // video.srcObject = stream;
//     audioElement.play();

// }
let ctx = null;
let canvas2 = document.getElementById('mycanvas2');
let ctx2 = canvas2.getContext('2d');

const manipulateImage = (ctx)=>{
    let imageData = ctx.getImageData(0,0,window.innerWidth,window.innerHeight);
    for(let i=0;i<imageData.data.length;i+=4){
        let r = imageData.data[i];
        let g = imageData.data[i+1];
        let b = imageData.data[i+2];
        let alpha = imageData.data[i+3];
        if(r>150&&g>150&&b>150){
            imageData.data[i] = 0; 
            imageData.data[i+1] =0; 
            imageData.data[i+2] = 255; 
        }
    }
    ctx.putImageData(imageData,0,0);
}
let startStream = () => {
    let canvas = document.getElementById('mycanvas');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
        video.srcObject = stream;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
         ctx = canvas.getContext('2d');
         function putVideo (){
             ctx.drawImage(video,0,0,window.innerWidth,window.innerHeight);
             manipulateImage(ctx);
             requestAnimationFrame(putVideo);
            }
        putVideo();
    })
}














// let audio = document.getElementById('myaudio');
// let signals = document.getElementById('mysignals');
// let audioCtx = new window.AudioContext();

// window.onload = async () => {
//     // Load your audio file
//     let audioFileURL = 'path/to/your/audiofile.mp3'; // Replace with the path to your audio file
//     let audioElement = new Audio(audioFileURL);

//     // Analyser setup
//     let audioSourceNode = audioCtx.createMediaElementSource(audioElement);
//     let analyserNode = audioCtx.createAnalyser();
//     audioSourceNode.connect(analyserNode);
//     analyserNode.connect(audioCtx.destination);

//     // Array to store audio frequency data
//     let audioData = new Uint8Array(320);

//     // Update visualizations at regular intervals
//     setInterval(() => {
//         analyserNode.getByteFrequencyData(audioData);
//         audioData.forEach((data, index) => {
//             // Update visualizations (adjust this part based on your needs)
//             signals.children[index].style.height = `${data}px`;
//         });
//     }, 100);

//     // Start playing the audio
//     audioElement.play();
// };
