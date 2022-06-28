//https://teachablemachine.withgoogle.com/models/pTey5gC6v/

Webcam.set({
    width:400,
    height:400,
    image_format: 'png',
    png_quality:100
});

document.getElementById('camera');
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Selife").innerHTML = '<img id="result_img" src="'+data_uri+'"/>';
    });
};

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IDnnZ8Sud/model.json', modelLoaded);
function modelLoaded(){
    console.log('Model is loaded!');
}

function ident(){
    img = document.getElementById('result_img');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){
    if(error){
        console.error(error);
    
    }
    else{
        console.log(results);
        document.getElementById("span1").innerHTML = results[0].label;
        document.getElementById("span2").innerHTML = results[0].confidence.toFixed(3);
        
    }
}
