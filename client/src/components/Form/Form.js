import React, { useEffect, useState } from 'react';
import {  TextField,  Button,  Typography,  Paper  }  from  '@material-ui/core';
import  FileBase    from   'react-file-base64';
import   {   useDispatch , useSelector  }   from 'react-redux';
import {  createPost,  updatePost }  from  '../../actions/posts';
import useStyles from './styles';



const Form  =  ({ currentId, setCurrentId })   =>  {
    const  [postData,  setPostData]   =  useState({
         title:  '',  message: '',  tags: '' ,  selectedFile: ''
    });
    const posts = useSelector((state)  =>  currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() =>{if (posts)  setPostData(posts);},  [posts])
        const clear = ()   =>  {
        setCurrentId(null);
        setPostData({ title:  '',  message: '',  tags: '' ,  selectedFile: ''});
    }

    const handleSubmit = (e)   =>  {
       e.preventDefault();
        var format = /[ `!@#$%^&*()_+\-=][{}/;':"|.<>?~]/;
        var format4 = /[^A-Za-z0-9. ,!"')(]/g ;
        var format1 = /[^A-Za-z0-9 ,'!]/g ;
         if(postData.title.charAt(postData.title.length-1) === ',' || postData.title.charAt(postData.title.length-1) === "'")
              {   alert("Please verify your entered data, subject items must be according to norms");
                 return}
 if(postData.message.charAt(postData.message.length-1) !== '.' && postData.message.charAt(postData.message.length-1) !== '!')
  {  alert("Please verify your entered data, subject items must be according to norms"); 
     return;}
  if(postData.message.charAt(postData.message.length-2) === '.' || postData.message.charAt(postData.message.length-2) === '!')
  {  alert("Please verify your entered data, subject items must be according to norms"); 
     return;}
 let y = 0;
 let z = 0; 
 let a = 0;
 let arr = Array.from(postData.message);
 for (let i = 0; i < arr.length; i++)
   {
       if(arr[i] === "(" ) { y++; }
       if(arr[i] === ")" ) { z++; }
       if(arr[i] === '"' ) { a++; }
       if( z > y ) {alert("Please verify your entered data, subject items must be according to norms");
               return;}
   }

  if(z !== y) {alert("Please verify your entered data, subject items must be according to norms");
               return;}
  if( a % 2 > 0) {alert("Please verify your entered data, subject items must be according to norms");
                  return;}      


        if  ( postData.title.charAt(0) ===' ' ||  postData.title.length < 5  || postData.title.charAt(postData.title.length-1) === ' '  || postData.message.charAt(0) ===' ' ||  postData.message.length < 10  || postData.message.charAt(postData.message.length-1) === ' '  || postData.selectedFile.charAt(0) ===' ' ||  postData.selectedFile.length < 1  || postData.selectedFile.charAt(postData.selectedFile.length-1) === ' ' || postData.tags.join(",").length < 2 ||  postData.tags.join(",").charAt(0) === ' ' || !(postData.tags.join(",").match(/^\S*$/)) ||  postData.tags.join(",").charAt(postData.tags.join(",").length-1) === ' ' || postData.tags.join(",").charAt(postData.tags.join(",").length-1) === ',' || (postData.tags.join(",").match(format)) || postData.title.match(format1) || postData.message.match(format4) ) 
        {
          alert("Please verify your entered data, subject items must be according to norms");
          return
        }
       if(!currentId){
       dispatch(createPost({...postData, name: user?.result?.name}));
       clear();
       } else  {
       dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
       clear();
       }
    }


      if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own subjects and like other's subjects.
        </Typography>
      </Paper>
    );
  }
    return(
        <Paper    className={classes.paper} >
            <form  autoComplete="off"    noValidate className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit}>
            <Typography   variant="h6">{currentId ? 'Update' : 'Create' } your subject</Typography>

            <TextField
                 name="title"
                 variant="outlined"
                 label="Title"
                 fullWidth
                 value={postData.title}
                 onChange={(e)  =>   setPostData({  ...postData, title: e.target.value  })}
                 />
            <TextField
                 name="message"
                 variant="outlined"
                 label="Message"
                 multiline rows={4}
                 fullWidth
                 value={postData.message}
                 onChange={(e)  =>   setPostData({  ...postData, message: e.target.value  })}
                 />
            <TextField
                 name="tags"
                 variant="outlined"
                 label="Tag (coma separated) "
                 fullWidth
                 value={postData.tags}
                 onChange={(e)  =>   setPostData({  ...postData, tags: e.target.value.split(',')  })}
                 />
                <div>
              <FileBase
                className={classes.fileInput}
                type="file"   
                multiple={false}
                onDone={({base64}) =>  setPostData({  ...postData, selectedFile:  base64 , createdAt: new Date()  })}
                />
                </div>
                <div style={{display:"flex",justifyItems:"space-between"}}    className={classes.buttonSubmit1}  >
                <Button  variant="contained" style={{marginTop:"10%",marginRight:"10px",justifyContent:"space-around"}} color="primary"  className={classes.buttonSubmit}  size="large"  type="submit"   >Submit</Button>
                <Button  variant="contained" style={{marginTop:"10%",marginLeft:"10px",justifyContent:"space-around"}} color="primary"  className={classes.buttonSubmit}  size="large"  onClick={clear}  >Clear</Button>
                </div>
            </form>
        </Paper>
    );
}


export default  Form;