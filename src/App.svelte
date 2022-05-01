<script>
  import {islogin,mode} from './Store.js'
  import Login from './Login.svelte'
  import Menu from './Menu.svelte'
  import Deposit from './Deposit.svelte'
  
</script>

{#if !$islogin}
  <Login/>
{:else if $mode == 'deposit'}
    <Deposit/>
{:else}  
  <Menu/>
{/if}


