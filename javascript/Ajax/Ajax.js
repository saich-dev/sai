//Ajax/ XHR Object 
// List of Http methods //
//1.GET: Requests data from a specified resource.//
//2.POST: Submits data to be processed to a specified resource.//
//3.PUT: Updates a current resource with new data.//
//4.DELETE: Deletes the specified resource.//
//5.HEAD: Same as GET but returns only HTTP headers and no document body.//
//6.OPTIONS: Describes the communication options for the target resource.//
//7.PATCH: Applies partial modifications to a resource.//


const xhr = new XMLHttpRequest();
xhr.open('Get','./persons.json')

//Readystage has 5 values //
// 0-request is not initialied//
// 1-server connection established //
// 2-request received //
// 3-request processing //
// 4-request finished and response is ready //
xhr.onreadystatechange = function(){
    // console.log(this.readyState);
    // console.log(this.status);
    if (this.readyState === 4 && this.status === 200){
        console.log(JSON.parse(this.response)); 
        console.log(JSON.parse(this.responseText)); 
        const data =JSON.parse(this.responseText); 
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${element.name}</strong> -${element.city}`;
            document.querySelector('#response').appendChild(li);
           
        });
    }
}
xhr.send();