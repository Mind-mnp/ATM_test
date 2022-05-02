<script>
  import {accounts,mode} from './Store.js'
</script>


<body>
  <h2>Checked Your SoftLottery</h2>
  <button on:click = {()=>$mode='menu2'}>Back to Menu</button>
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
  </style>