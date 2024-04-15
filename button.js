document.getElementById('showMoreBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('contentDiv');
    contentDiv.style.display = 'block';
    document.getElementById('showMoreBtn').style.display = 'none';
   });
   document.getElementById('changeContentBtn').addEventListener('click', function() {
    document.getElementById('objectImage').src = "images/sunset.jpg";
    document.getElementById('description').innerText = "Sunsets how they scream agony and beauty at the same time appalls me. nothing but enigmathat scream tomorrow is another day when there isnt one.";
   });
   document.getElementById('backBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('contentDiv');
    contentDiv.style.display = 'none';
    document.getElementById('showMoreBtn').style.display = 'block';
   });