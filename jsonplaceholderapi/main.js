// Reading/fetching data from the APIs
const getTodo = async (id) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (! response.ok) 
          throw new Error(`Status ${response.status}`);
        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log('Failed to fetch user:', error.message)
    }
}

getTodo()


// Creating a new resources
const createPost = async (id) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Software engineering at Revolut',
                experience: '5 years',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (! response.ok) 
          throw new Error(`Status ${response.status}`);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log('Failed to fetch user:', error.message)
    }
}
createPost()

// Updating the resources
const updatePost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Senior Software Engineering at Meta!',
                experience: '10 years',
                userId: 2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    if (!res.ok)
        throw new Error(`Status: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.log('Cannot updated the post', error)
    }
}
updatePost(1)
updatePost(1).then((result) => console.log(result));

// Update part of a resource
const changeTitle = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'Product Engineer at Salesforce',
                experience: '21 years'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) throw new Error(`Status ${res.status}`)
            return await res.json()
    } catch (error) {
        console.log('I cannot patch the title', error.message)
    }
  
}
changeTitle(3)
changeTitle(3).then((result) => console.log(result))


// Remove a resource
const deletePost = async (id) => {
    try {
        const deleted = await fetch(`https://jsonplaceholder.typicode.com/posts/${id},`, {
            method: 'DELETE',
            body: JSON.stringify({
                title: 'Product Engineer at Salesforce',
                experience: '21 years'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!deleted.ok) throw new Error(`Status: ${deleted.status}`)
            return await deleted.json()
    } catch (error) {
        console.log('Cannot delete', error.message)
    }
}
deletePost(3)
deletePost(3).then((result) => console.log(result))
