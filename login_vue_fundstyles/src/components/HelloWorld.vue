<template>
  <div class="hello">
    <form action="/form-page-handling" method="post">
  <div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
      <div class="fd-form-header">
        <span class="fd-form-header__text">LOG IN</span>
      </div>
    </div>

    <div class="fd-row fd-row--top">
      <div class="fd-col ">
        <div class="fd-form-group">
          <span class="sap-icon sap-icon--lightbulb sap-icon--color-information" style="font-size:3rem"></span>
          <div class="fd-form-group__header">
         
            <h2 class="fd-form-group__header-text">Imaginary Social</h2>
          </div>

         

          <div class="fd-row">
            <div class="fd-col ">
              <div class="fd-form-item">
                <label for="email" class="fd-form-label fd-form-label--colon fd-form-label--required">Email</label>
                <input class="fd-input" type="email" placeholder="Enter Email" name="email" id="email" required>
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col ">
              <div class="fd-form-item">
                <label for="psw" class="fd-form-label fd-form-label--colon fd-form-label--required">Password</label>
                <input class="fd-input" type="password" placeholder="Enter Password" name="psw" id="psw" required>
              </div>
            </div>
          </div>

        

     
          
          <div class="fd-form-item">
            <fieldset class="fd-fieldset">
              <input class="fd-checkbox is-information" type="checkbox" id="rememberme" checked name="remember"
                value="remember">
              <label class="fd-checkbox__label" for="rememberme">
                <div class="fd-checkbox__label-container">
                  <span class="fd-checkbox__text">Remember me</span>
                </div>
              </label>
            </fieldset>

          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="fd-bar fd-bar--footer">
    <div class="fd-bar__right">
      <div class="fd-bar__element">
        <button class="fd-button fd-button--emphasized" type="submit">Log In</button>
      </div>
      <div class="fd-bar__element">
        <input class="fd-button fd-button--ghost" type="reset">
      </div>
    </div>
  </div>

  <div class ="fd-bar__center">
    <div class="fd-bar__element">
      <p> Not part of the <b>Imaginary Social Yet?</b>  <u>Sign Up.</u></p>
    </div>
  </div>

</form>
   
   
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~fundamental-styles/dist/fundamental-styles';
@import '~@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables';

.hello {
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:white;
}

</style>
