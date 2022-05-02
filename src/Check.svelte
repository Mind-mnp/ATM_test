<script>
  import {accounts,mode} from './Store.js'
</script>


<body>
  <h2>Checked Your SoftLottery</h2>
  <button on:click = {()=>$mode='menu2'} class='back'>Back to Menu</button>
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
  .back{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border:none;
  height: 40px;
  width: 90px;
  margin: 5px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position:fixed;
  bottom: 0px;
  right: 0px
  }
  </style>