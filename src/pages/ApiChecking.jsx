// import React, { useEffect, useState } from "react";

// function ApiChecking() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: "", body: "" });
//   const [updatePost, setUpdatePost] = useState({
//     id: 1,
//     title: "Changed data",
//     body: "Updated Body",
//   });

//   // GET request
//   const fetchPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log("GET Method => ", data.slice(0, 5));
//     setPosts(data.slice(0, 5));
//   };

//   // POST Method
//   const createPost = async () => {
//     // loading = true
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     });

//     const data = await res.json();
//     console.log("Post method => ", data);
//     // loading = false
//   };

//   // PUT request
//   const updateExistingPost = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatePost),
//       }
//     );
//     const data = await res.json();
//     console.log("Updated Post:", data);
//   };

//   const updatePartialData = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: "Partially Updated title",
//         }),
//       }
//     );

//     const data = await res.json();
//     console.log("Patched data => ", data);
//   };

//   const deletePost = async (id) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (res.ok) {
//       console.log(`Deleted post with ID ${id}`);

//       setPosts(posts.filter((post) => post.id !== id));
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>GET Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

//       <h2>Create New Post</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newPost.title}
//         onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Body"
//         value={newPost.body}
//         onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
//       />
//       <button onClick={createPost}>Create Post</button>

//       <h2>Update Post</h2>
//       <button onClick={updateExistingPost}>Update Post with ID 1</button>
//       <h2>Update Partial Post (PATCH)</h2>
//       <button onClick={updatePartialData}>PATCH Post with ID 1</button>

//       <h2>Delete Post</h2>
//       <button onClick={() => deletePost(1)}>Delete Post with ID 1</button>
//     </div>
//   );
// }

// export default ApiChecking;

// import React from 'react'
// const axios = require("axios");

// export default function ApiChecking() {
//   return (
//     <div>ApiChecking</div>
//   )
// }

// Axios Method

import React, { useEffect, useState } from "react";
import axios from "../middleware/axiosInstance";
// mui
import {Button , Snackbar , IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ApiChecking() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [updatePost, setUpdatePost] = useState({
    id: 1,
    title: "Tatake",
    body: "Attack On Titan",
  });
  const [load, setLoad] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [mssg , setMssg] = useState("");

  // GET request
  const fetchPosts = async () => {
    try {
      const res = await axios.get("/posts");
      console.log("GET Method =>", res.data);
      setPosts(res.data.slice(-5));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // POST request
  const createPost = async () => {
    setLoad(true);
    setOpen(true);
    setMssg("New Data Posted");
    try {
      const res = await axios.post(
        "/posts",
        newPost,
        // {
        //     title : "Arise",
        //     body : "Solo Leveling"
        // },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("POST Method => ", res.data);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoad(false);
      setMssg("");
    }
  };

  // PUT request
  const updateExistingPost = async () => {
    setLoad(true);
    setOpen(true);
    setMssg("Data Updated");
    try {
      const res = await axios.put(`/posts/${updatePost.id}`, updatePost, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("Updated Post:", res.data);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setLoad(false);
      setOpen(false)
    }
  };

  // PATCH request
  const updatePartialData = async () => {
    setLoad(true);
    setOpen(true)
    setMssg("Data Patched");
    try {
      const res = await axios.patch(
        `/posts/${updatePost.id}`,
        {
          title: "Partially Updated title",
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("Patched data => ", res.data);
      //   setPosts([...posts , res.data])
    } catch (error) {
      console.error("Error patching post:", error);
    } finally {
      setLoad(false);
      setOpen(false);
    }
  };

  // DELETE request
  const deletePost = async (id) => {
    setLoad(true);
    setOpen(true);
    setMssg("Data Deleted");
    try {
      await axios.delete(`posts/${id}`);
      console.log(`Deleted post with ID ${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setLoad(false);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


 // snack bar component
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>GET Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={load ? null : createPost}>Create Post</button>

      <h2>Update Post</h2>
      <button onClick={load ? null : updateExistingPost}>
        Update Post with ID 1
      </button>

      <h2>Update Partial Post (PATCH)</h2>
      <button onClick={load ? null : updatePartialData}>
        PATCH Post with ID 1
      </button>

      <h2>Delete Post</h2>
      <button onClick={() => (load ? null : deletePost(100))}>
        Delete Post with ID 100
      </button>

      <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={mssg}
        action={action}
      />
    </div>
    </div>
  );
}

export default ApiChecking;
