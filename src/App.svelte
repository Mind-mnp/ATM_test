<script>
  import {islogin,mode} from './Store.js'
  import Login from './Login.svelte'
  import Menu from './Menu.svelte'
  import Menu2 from './Menu2.svelte'
  import Register from './Register.svelte'
  import Withdraw from './Withdraw.svelte'
  
  import Check from './Check.svelte'
  
</script>

{#if !$islogin}
  <Login/>
{:else if $mode == 'register'}
    <Register/>
{:else if $mode == 'login'}
    <Login/>
{:else if $mode == 'menu'}
    <Menu/>
{:else if $mode == 'menu2'}
    <Menu/>      
{:else}  
  <Menu/>
{/if}


