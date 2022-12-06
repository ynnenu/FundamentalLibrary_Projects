
import './App.css';


function App() {
  return (
    <div className="App">
  <div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
      <div class="fd-form-header">
        <span class="fd-form-header__text">Sign Up</span>
      </div>
    </div>

    <div class="fd-row fd-row--top">
      <div class="fd-col fd-col--12 fd-col-lg--6">
        <div class="fd-form-group">
          <div class="fd-form-group__header">
            <h2 class="fd-form-group__header-text">Imaginary Social</h2>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item ">
                <label for="first_name" class="fd-form-label fd-form-label--colon fd-form-label--required">First
                  Name</label>
                <input class="fd-input" type="text" placeholder="Enter First Name" name="first_name" id="first_name"
                  required maxlength="32" pattern="[A-Za-z]{1,32}" />
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="last_name" class="fd-form-label fd-form-label--colon fd-form-label--required">Last Name</label>
                <input class="fd-input" type="text" placeholder="Enter Last Name" name="last_name" id="last_name" required
                  maxlength="32" pattern="[A-Za-z]{1,32}" />
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="email" class="fd-form-label fd-form-label--colon fd-form-label--required">Email</label>
                <input class="fd-input" type="email" placeholder="Enter Email" name="email" id="email" required />
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="psw" class="fd-form-label fd-form-label--colon fd-form-label--required">Password</label>
                <input class="fd-input" type="password" placeholder="Enter Password" name="psw" id="psw" required />
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="psw-repeat" class="fd-form-label fd-form-label--colon fd-form-label--required">Repeat
                  Password</label>
                <input class="fd-input" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat"
                  required />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fd-col fd-col--12 fd-col-lg--6 fd-col--wrap">
        <div class="fd-form-group">

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="birthday" class="fd-form-label fd-form-label--colon fd-form-label--required">Date of
                  Birth</label>
                <input class="fd-input" type="date" name="bday" id="bday" />
              </div>
            </div>
          </div>

          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="country" class="fd-form-label fd-form-label--colon">Country</label>
                <input type="text" class="fd-input fd-input-group__input" name="country" required list="country"
                  id="country" />
                <datalist id="country">
                  <option value="Albania"></option>
                  <option value="Australia"></option>
                  <option value="Canada"></option>
                  <option value="USA"></option>
                </datalist>
              </div>
            </div>
          </div>


          <div class="fd-row">
            <div class="fd-col fd-col-lg--12 fd-col-xl--12">
              <div class="fd-form-item">
                <label for="bio" class="fd-form-label fd-form-label--colon">Short Bio</label>
                <textarea class="fd-textarea" name="bio" rows="4" cols="50"></textarea>
              </div>
            </div>
          </div>

          
          <div class="fd-form-item">
            <fieldset class="fd-fieldset">
              <input class="fd-checkbox is-information" type="checkbox" id="rememberme" checked name="remember"
                value="remember"/>
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
        <button class="fd-button fd-button--emphasized" type="submit">Register</button>
      </div>
      <div class="fd-bar__element">
        <input class="fd-button fd-button--ghost" type="reset"/>
      </div>
    </div>
  </div>

   </div>
   

  );
}

export default App;
