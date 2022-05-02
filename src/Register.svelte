<script>
  import {accounts, islogin} from './Store.js';
  let AccountNo = ''
  let pin = ''

  function checkaccount() {
    if (!(AccountNo in $accounts) || $accounts[AccountNo].pin!=pin){
      alert('Incorrect');
    }
    else{
      $islogin = true;
      AccountNo = '';
      pin = '';
    }
    
  }

</script>

<body>
  <form class='register'>
 <h2>Register</h2>
  <label><input bind:value={AccountNo} placeholder='ID'></label>
  <label><input type='password'bind:value={pin} 
 placeholder='PIN'></label>
  <button on:click={checkaccount}>Submit</button>
  </form>
 
</body>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
*{
  margin: 0px;
  paddin: 0px;
  font-family: 'Itim', cursive;
}
  body{
    height: 100vh ;
    width: 100% ;
    background-image: linear-gradient(130deg, #c7ccf2, #f3caf4);
    display:flex;
    justify-content:center;
    align-items: center;
}
  form.register{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  input{
  border:none;
  height: 40px;
  width: 250px;
  margin: 5px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
}
  button{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border:none;
  height: 40px;
  width: 250px;
  margin: 5px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
}

  h2{margin: 10px;
    text-align: center;
     font-size:60px;
  }
</style>