Vue.component('menu', {
  template: '
  <nav class="navbar navbar-expand-lg fixed-top navbar-light navbar-aliaxis">
        <div class="container">
              <a class="navbar-brand" href="#">
                <img src="img/aliaxis-logo.png" class="img-fluid img-logo">
                <br>
                <span class="logo-caption">Utilities &amp; Infrastructures</span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <!--<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="segmentsList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Applications
                    </a>
                    <div id="segmentsMenu" class="dropdown-menu" aria-labelledby="segmentsList">
                        <div v-for="segment in segments">
                          <a class="dropdown-item" href="products.html">{{ segment['fields']['name-fr'] }}</a>
                        </div>
                    </div>
                  </li>-->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="catsList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Par catégorie
                    </a>
                    <div id="categoriesMenu" class="dropdown-menu" aria-labelledby="catsList">
                        <div v-for="category in categories">
                          <a class="dropdown-item" href="products.html">{{ category['fields']['name-fr'] }}</a>
                        </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="matsList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Par matériau
                    </a>
                    <div id="materialsMenu" class="dropdown-menu" aria-labelledby="matsList">
                        <div v-for="material in materials">
                          <a class="dropdown-item" href="products.html">{{ material['fields']['name'] }}</a>
                        </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="systList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Systèmes
                    </a>
                    <div id="systemsMenu" class="dropdown-menu" aria-labelledby="systList">
                        <div v-for="system in systems">
                          <a class="dropdown-item" href="system.html">{{ system['fields']['name'] }}</a>
                        </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="servList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Services
                    </a>
                    <div id="servicesMenu" class="dropdown-menu" aria-labelledby="servList">
                      <div v-for="service in services">
                          <a class="dropdown-item" href="service.html">{{ service['fields']['title-fr'] }}</a>
                        </div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
        </div>
    </nav>
  '
})