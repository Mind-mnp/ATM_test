<script>
  import {islogin,mode} from './Store.js'
  import Login from './Login.svelte'
  import Menu from './Menu.svelte'
  import Deposit from './Deposit.svelte'
  import Withdraw from './Withdraw.svelte'
  
  import Check from './Check.svelte'
  
</script>

{#if !$islogin}
  <Login/>
{:else if $mode == 'deposit'}
    <Deposit/>
{:else if $mode == 'checked'}
    <Check/>
{:else if $mode == 'withdraw'}
    <Withdraw/>
{:else}  
  <Menu/>
{/if}


