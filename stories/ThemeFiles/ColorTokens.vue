<template>
  <div class="listTable">
    <table style="width: 100%;"> 
      <tr>
        <th>
          Token
        </th>

         <th>
          Role
        </th>

        <th>
          Value
        </th>
      </tr>
     
      <tr>
        <td>
          $ui-background
        </td>
        <td>
          Default Page background
        </td>
        <td> 
          <div class="preview-box" style="background-color: var(--ui-background); border: 0.5px solid var(--Gray10-hover);" />
            </td> 
      </tr> 

       <tr>
        <td>
          $ui-background
        </td>
        <td>
          Default Page background
        </td>
        <td> 
          <div class="preview-box" style="background-color: var(--ui-background);" />
            </td> 
      </tr> 

    </table>


  </div>
</template>

<script>
import '../style-tokens.css'

export default {
  name: 'theme-colors',
  props: {
    entry: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.preview-box{
  width: 50px; 
  height: 50px; 
}

th{
  background-color: var(--Gray10);
  text-align: left; 
  font-weight: 600;
  padding: 1%;
  border-bottom: 1px solid;
}

table{
  background-color: var(--Gray10);
}
td{ 
  padding: 1%; 
  /* border: solid 1px var(--Gray20); */
}
</style>