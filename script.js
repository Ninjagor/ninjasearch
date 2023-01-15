function search() {
    document.getElementById('querying').style.display = "block"
    document.getElementById('RND').style.display = "none";
    let startTime = performance.now()
    // let query1 = document.getElementById('search').value;
    const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
    if (!query) {
      window.location.replace('index.html')
    }
    
   if (!query.trim() == "") {
    document.getElementById('search1').value = query;
    fetch(`https://rohit11.pythonanywhere.com/search/${query}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    response = response.data
    document.getElementById('results').innerHTML = ""
    document.getElementById('resultNum').textContent = response.length;
    document.getElementById('RND').style.display = "block";
    let endTime = performance.now();
    document.getElementById('RND').textContent += ` in ${endTime/1000} seconds`;

    for (i in response) {
      let curr = response[i]
      let div = document.createElement('div')
      div.classList.add('result')
      let a = document.createElement('a')
      a.href = curr.url
      a.textContent = curr.title
      let p = document.createElement('p');
      p.textContent = curr.description
    div.appendChild(a)
      div.appendChild(p)
    console.log(div)
      document.getElementById('results').appendChild(div)
      
    }
    
  })
   }
  }
  
  search()