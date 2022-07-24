<!-- need to remove -->
<li class="nav-item">
    <a href="{{ route('home') }}" class="nav-link {{ Request::is('home') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Home</p>
    </a>
</li>
<li class="nav-item">
    <router-link to="/test" class="nav-link">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p>Test</p>
    </router-link>
</li>
