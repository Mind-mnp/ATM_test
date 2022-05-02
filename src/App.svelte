<script>
  import {islogin,mode} from './Store.js'
  import Login from './Login.svelte'
  import Menu from './Menu.svelte'
  import Menu2 from './Menu2.svelte'
  import Register from './Register.svelte'
  import Buy from './Buy.svelte'
  
  import Check from './Check.svelte'
  
</script>

{#if $mode == 'menu'}
  <Menu/>
{:else if $mode == 'register'}
    <Register/>
{:else if $mode == 'login'}
    <Login/>
{:else if $mode == 'menu2'}
    <Menu2/>      
{:else if $mode == 'buy'}
    <Buy/> 
{:else if $mode == 'check'}
    <Check/> 
{:else}  
  <Menu2/>
{/if}


