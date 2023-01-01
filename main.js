//webcam function


//single line comment
//dest_height:450,dest_width:680,

//multiline comment
/*dest_height:450,
dest_width:680,*/



Webcam.set({
    height: 400,
    width: 600,
    image_type: 'png',
    png_quality: 100
});

//variable

webcam = document.getElementById('wi');
Webcam.attach('#wi');

//snapshot function

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('ci').innerHTML = '<img id="cm" src="' + data_uri + '">';
    });
}

console.log('ml5 version :', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uxgt-SPOR/model.json', modelLoaded)

//function modelLoaded only called when teachable machine is called properly

function modelLoaded() {
    console.log('Model Loaded Successfully');
}

//function check used to compare webcam image with teachable machine image

function check() {
    img = document.getElementById('cm');
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById('object').innerHTML = results[0].label;
        document.getElementById('Accuracy').innerHTML = (results[0].confidence*100).toFixed(3) +"%";
    }
}