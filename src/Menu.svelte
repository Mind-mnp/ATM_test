<script>
  import {islogin,mode} from './Store.js';
  
  function logout() {
    $islogin = false;
    
  }
</script>

<body>
  <button on:click ={()=>$mode='deposit'}>Deposit</button>
  <button >Withdraw</button>
  <button >Check balance</button>
  <button on:click={logout}>Logout</button>
</body>

<style>
  
   @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
*{margin: 0px;
  paddin: 0px;
  font-family: 'Itim', cursive;}

  body{
    height: 100vh ;
    width: 100% ;
    background-image: linear-gradient(130deg, #c7ccf2, #f3caf4);
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
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
</style>

