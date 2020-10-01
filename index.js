//This function is to retrieve the image from Dog API
function retrieveImage(imageCount){
    fetch(`https://dog.ceo/api/breeds/image/random/${imageCount}`)
      .then(response => response.json())
      .then(responseJson => displayImages(responseJson))
      .catch(error => alert ('Something went wrong.Please try again later.'));
}

// This function is to replay the existing images with the new retrieved image(s)
function displayImages(responseJson){
  console.log(responseJson);
  $('.results-img').html('');// This will clear our the old image(s)
  for (let i=0; i<responseJson.message.length;i++){
    $('.results-img').append(
      `<img src="${responseJson.message[i]}" class="results-img"><br>`)    
    }
    $('.results').removeClass('hidden');
}
//This function reponses to the event of users click on the retrieve button
function watchForm(){
    $('form').submit(event =>{
      event.preventDefault();
      let imageCount=$(`input[type="number"]`).val();
      console.log(imageCount);
      retrieveImage(imageCount);
    })
}
//This function  is to console log the link retrieved from Dog API
$(function(){
    console.log('App loaded! Waiting for submit!');    
    watchForm();
});