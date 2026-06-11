<template>
  <div class="page-root">

    <!-- ===== LANDING PAGE BACKGROUND (SmartStockDNU) ===== -->
    <div class="dashboard-bg" aria-hidden="true">
      <div class="landing-static">

        <!-- Navbar -->
        <nav class="navbar">
          <div class="container">
            <div class="logo">
              <span class="logo-icon">🏢</span>
              <span class="logo-text">SmartStockDNU</span>
            </div>
            <div class="nav-menu">
              <span class="nav-link active">Trang chủ</span>
              <span class="nav-link">Tính năng</span>
              <span class="nav-link">Giới thiệu</span>
              <span class="nav-link">Liên hệ</span>
            </div>
            <div class="nav-buttons">
              <button class="btn-login">Đăng nhập</button>
              <button class="btn-register">Đăng ký</button>
            </div>
          </div>
        </nav>

        <!-- Hero -->
        <header class="hero">
          <div class="container">
            <div class="hero-content">
              <div class="hero-badge">
                <span class="badge-icon">🚀</span>
                <span class="badge-text">v2.0 Mới ra mắt</span>
              </div>
              <h1 class="hero-title">
                Quản lý bán hàng &amp;<br>
                <span class="highlight">Kho hàng</span> thông minh
              </h1>
              <p class="hero-description">
                Quản lý sản phẩm, tồn kho, đơn hàng, khách hàng, nhà cung cấp trong một hệ thống duy nhất.
                Giải pháp toàn diện cho doanh nghiệp vừa và nhỏ.
              </p>
              <div class="hero-buttons">
                <button class="btn-primary">Dùng thử miễn phí</button>
                <button class="btn-secondary">Xem demo</button>
              </div>
            </div>
            <div class="hero-image">
              <div class="image-wrapper">
                <div class="dashboard-preview">
                  <div class="preview-header">
                    <div class="preview-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div class="preview-title">Dashboard Overview</div>
                  </div>
                  <div class="preview-content">
                    <div class="preview-stats">
                      <div class="stat">
                        <span class="stat-value">156</span>
                        <span class="stat-label">Sản phẩm</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">342</span>
                        <span class="stat-label">Đơn hàng</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">89</span>
                        <span class="stat-label">Khách hàng</span>
                      </div>
                    </div>
                    <div class="preview-chart">
                      <div class="chart-bar" style="height: 30%"></div>
                      <div class="chart-bar" style="height: 45%"></div>
                      <div class="chart-bar" style="height: 38%"></div>
                      <div class="chart-bar" style="height: 60%"></div>
                      <div class="chart-bar" style="height: 52%"></div>
                      <div class="chart-bar" style="height: 75%"></div>
                      <div class="chart-bar active" style="height: 85%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Statistics -->
        <section class="statistics">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">156+</div>
                <div class="stat-label">Sản phẩm</div>
                <div class="stat-trend">↑ 12% tháng này</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">3.4k+</div>
                <div class="stat-label">Đơn hàng</div>
                <div class="stat-trend">↑ 8.3% tháng này</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">98%</div>
                <div class="stat-label">Hài lòng</div>
                <div class="stat-trend">↑ 5.2% tháng này</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Hỗ trợ</div>
                <div class="stat-trend">Luôn sẵn sàng</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features -->
        <section class="features">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Tính năng nổi bật</h2>
              <p class="section-subtitle">Mọi thứ bạn cần để vận hành doanh nghiệp một cách chuyên nghiệp</p>
            </div>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">📦</div>
                <h3 class="feature-title">Quản lý sản phẩm</h3>
                <p class="feature-desc">Quản lý danh mục sản phẩm, theo dõi tồn kho, cảnh báo hàng sắp hết</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🛒</div>
                <h3 class="feature-title">Quản lý đơn hàng</h3>
                <p class="feature-desc">Xử lý đơn hàng nhanh chóng, theo dõi công nợ và thanh toán</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h3 class="feature-title">Quản lý khách hàng</h3>
                <p class="feature-desc">Lưu trữ thông tin khách hàng, lịch sử mua hàng, công nợ</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏪</div>
                <h3 class="feature-title">Quản lý kho hàng</h3>
                <p class="feature-desc">Cập nhật tồn kho thời gian thực, nhập/xuất kho dễ dàng</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3 class="feature-title">Báo cáo thông minh</h3>
                <p class="feature-desc">Thống kê doanh thu, biểu đồ trực quan, báo cáo xuất Excel</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3 class="feature-title">Phân quyền chi tiết</h3>
                <p class="feature-desc">Admin, Nhân viên bán hàng, Thủ kho - mỗi vai trò có quyền riêng</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

    <!-- ===== OVERLAY ===== -->
    <div class="overlay"></div>

    <!-- ===== NÚT BACK CỐ ĐỊNH GÓC TRÊN TRÁI ===== -->
    <button class="btn-back" @click="router.push('/')">
      <span class="btn-back-arrow">←</span>
      <span>Về trang chủ</span>
    </button>

    <!-- ===== LOGIN MODAL ===== -->
    <div class="login-container">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo">
            <span class="logo-icon">🏢</span>
            <span class="logo-text">Microservices Dashboard</span>
          </div>
          <div class="auth-tabs">
            <button class="tab-btn" :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">
              Đăng nhập
            </button>
            <button class="tab-btn" :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">
              Đăng ký
            </button>
          </div>
        </div>

        <!-- FORM ĐĂNG NHẬP -->
        <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label>Tên đăng nhập</label>
            <div class="input-wrap">
              <span class="input-prefix">👤</span>
              <input type="text" v-model="loginForm.username" placeholder="Nhập tên đăng nhập" required>
            </div>
          </div>
          <div class="form-group">
            <label>Mật khẩu</label>
            <div class="input-wrap">
              <span class="input-prefix">🔒</span>
              <input :type="showPassword ? 'text' : 'password'" v-model="loginForm.password" placeholder="Nhập mật khẩu" required>
              <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                {{ showPassword ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>
          <div class="form-options">
            <label class="checkbox">
              <input type="checkbox" v-model="rememberMe"> Ghi nhớ đăng nhập
            </label>
            <a href="#" class="forgot-link">Quên mật khẩu?</a>
          </div>
          <button type="submit" class="btn-submit" :disabled="loading">
            {{ loading ? 'Đang xử lý...' : 'Đăng nhập' }}
          </button>

          <div class="register-link">
            Chưa có tài khoản?
            <span @click="activeTab = 'register'">Đăng ký</span>
          </div>
        </form>

        <!-- FORM ĐĂNG KÝ -->
        <form v-else @submit.prevent="handleRegister" class="auth-form">
          <div class="form-row">
            <div class="form-group half">
              <label>Họ và tên *</label>
              <input type="text" v-model="registerForm.fullName" placeholder="Nhập họ tên" required>
            </div>
            <div class="form-group half">
              <label>Tên đăng nhập *</label>
              <input type="text" v-model="registerForm.username" placeholder="Nhập tên đăng nhập" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label>Email</label>
              <input type="email" v-model="registerForm.email" placeholder="example@email.com">
            </div>
            <div class="form-group half">
              <label>Số điện thoại</label>
              <input type="tel" v-model="registerForm.phone" placeholder="0912345678">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label>Mật khẩu *</label>
              <div class="input-wrap">
                <input :type="showRegPassword ? 'text' : 'password'" v-model="registerForm.password" placeholder="Nhập mật khẩu" required>
                <button type="button" class="toggle-password" @click="showRegPassword = !showRegPassword">{{ showRegPassword ? '🙈' : '👁️' }}</button>
              </div>
            </div>
            <div class="form-group half">
              <label>Xác nhận mật khẩu *</label>
              <div class="input-wrap">
                <input :type="showRegConfirm ? 'text' : 'password'" v-model="registerForm.confirmPassword" placeholder="Xác nhận mật khẩu" required>
                <button type="button" class="toggle-password" @click="showRegConfirm = !showRegConfirm">{{ showRegConfirm ? '🙈' : '👁️' }}</button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="checkbox">
              <input type="checkbox" v-model="agreeTerms" required>
              <span>Tôi đồng ý với <a href="#">Điều khoản sử dụng</a></span>
            </label>
          </div>
          <button type="submit" class="btn-submit register" :disabled="registering">
            {{ registering ? 'Đang xử lý...' : 'Đăng ký' }}
          </button>

          <!-- Divider -->
          <div class="social-divider">
            <span class="divider-line"></span>
            <span class="divider-text">hoặc đăng ký nhanh với</span>
            <span class="divider-line"></span>
          </div>

          <!-- Social Register -->
          <div class="social-buttons">
            <button type="button" class="btn-social btn-google" @click="handleGoogleAuth">
              <svg class="social-icon" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button type="button" class="btn-social btn-facebook" @click="handleFacebookAuth">
              <svg class="social-icon" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>
        </form>

        <div v-if="errorMessage" class="error-message">⚠️ {{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">✅ {{ successMessage }}</div>
      </div>

      <div class="auth-footer">
        <p>© 2025 Microservices Dashboard. All rights reserved.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import api from '@/api/axios';

const authStore = useAuthStore();
const router = useRouter();

const activeTab = ref('login');
const loginForm = ref({ username: '', password: '' });
const showPassword = ref(false);
const rememberMe = ref(false);
const loading = ref(false);

const registerForm = ref({ username: '', password: '', confirmPassword: '', fullName: '', email: '', phone: '' });
const showRegPassword = ref(false);
const showRegConfirm = ref(false);
const registering = ref(false);
const agreeTerms = ref(false);

const errorMessage = ref('');
const successMessage = ref('');

const handleLogin = async () => {
  errorMessage.value = '';
  loading.value = true;
  try {
    const response = await api.post('/auth/login', {
      username: loginForm.value.username,
      password: loginForm.value.password
    });
    const { token, role, fullName, userId } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userId', userId);
    authStore.token = token; authStore.role = role;
    authStore.fullName = fullName; authStore.user = { fullName, id: userId };
    if (rememberMe.value) localStorage.setItem('rememberMe', 'true');
    router.push('/app/dashboard');
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Đăng nhập thất bại!';
  } finally {
    loading.value = false;
  }
};

const handleRegister = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  if (registerForm.value.password !== registerForm.value.confirmPassword) { errorMessage.value = 'Mật khẩu xác nhận không khớp!'; return; }
  if (registerForm.value.password.length < 6) { errorMessage.value = 'Mật khẩu phải có ít nhất 6 ký tự!'; return; }
  if (!registerForm.value.fullName) { errorMessage.value = 'Vui lòng nhập họ tên!'; return; }
  if (!registerForm.value.username) { errorMessage.value = 'Vui lòng nhập tên đăng nhập!'; return; }
  registering.value = true;
  try {
    const response = await api.post('/auth/register', {
      username: registerForm.value.username,
      password: registerForm.value.password,
      confirmPassword: registerForm.value.confirmPassword,
      fullName: registerForm.value.fullName,
      email: registerForm.value.email,
      phone: registerForm.value.phone
    });
    const { token, role, fullName, userId, message } = response.data;
    localStorage.setItem('token', token); localStorage.setItem('role', role);
    localStorage.setItem('fullName', fullName); localStorage.setItem('userId', userId);
    authStore.token = token; authStore.role = role;
    authStore.fullName = fullName; authStore.user = { fullName, id: userId };
    successMessage.value = message || 'Đăng ký thành công!';
    setTimeout(() => router.push('/app/dashboard'), 1500);
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Đăng ký thất bại!';
  } finally {
    registering.value = false;
  }
};

// Xử lý đăng nhập/đăng ký bằng Google
const handleGoogleAuth = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google?prompt=select_account`;
};

// Xử lý đăng nhập/đăng ký bằng Facebook
const handleFacebookAuth = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/facebook`;
};
</script>

<style scoped>
/* ===== ROOT ===== */
.page-root {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== DASHBOARD BACKGROUND (Landing static) ===== */
.dashboard-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.landing-static {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #faf9ff;
  color: #051a3e;
  height: 100vh;
  overflow: hidden;
}

.landing-static * { box-sizing: border-box; }

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navbar */
.navbar {
  background: rgba(250, 249, 255, 0.95);
  border-bottom: 1px solid rgba(195, 198, 214, 0.3);
  padding: 16px 0;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo { display: flex; align-items: center; gap: 10px; }
.logo-icon { font-size: 28px; }
.logo-text { font-size: 18px; font-weight: 700; color: #003d9b; }
.nav-menu { display: flex; gap: 32px; }
.nav-link { color: #434654; font-weight: 500; }
.nav-link.active { color: #003d9b; border-bottom: 2px solid #003d9b; padding-bottom: 4px; }
.nav-buttons { display: flex; gap: 12px; }
.btn-login, .btn-register { padding: 8px 24px; border-radius: 8px; font-weight: 600; border: none; }
.btn-login { background: transparent; border: 1px solid #003d9b; color: #003d9b; }
.btn-register { background: #003d9b; color: white; }

/* Hero */
.hero {
  padding: 60px 0 40px;
  background: radial-gradient(circle at 50% 50%, rgba(0, 82, 204, 0.05) 0%, #faf9ff 70%);
}
.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}
.hero-content { flex: 1; min-width: 300px; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0, 82, 204, 0.1); padding: 6px 14px; border-radius: 30px; margin-bottom: 24px;
}
.badge-icon { font-size: 14px; }
.badge-text { font-size: 13px; font-weight: 500; color: #0052cc; }
.hero-title { font-size: 40px; font-weight: 800; line-height: 1.2; margin-bottom: 24px; color: #051a3e; }
.highlight { color: #0052cc; }
.hero-description { font-size: 16px; line-height: 1.6; color: #434654; margin-bottom: 32px; max-width: 500px; }
.hero-buttons { display: flex; gap: 16px; }
.btn-primary, .btn-secondary { padding: 14px 32px; border-radius: 12px; font-weight: 600; border: none; }
.btn-primary { background: #0052cc; color: white; box-shadow: 0 4px 12px rgba(0, 82, 204, 0.2); }
.btn-secondary { background: transparent; border: 1px solid #c3c6d6; color: #051a3e; }

.hero-image { flex: 1; min-width: 300px; }
.image-wrapper {
  background: white; border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden; border: 1px solid rgba(195, 198, 214, 0.3);
}
.dashboard-preview { padding: 16px; }
.preview-header {
  display: flex; align-items: center; gap: 12px;
  padding-bottom: 16px; border-bottom: 1px solid #e9edff;
}
.preview-dots { display: flex; gap: 6px; }
.preview-dots span { width: 10px; height: 10px; border-radius: 50%; background: #c3c6d6; }
.preview-title { font-size: 12px; color: #737685; }
.preview-content { padding-top: 16px; }
.preview-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.stat { text-align: center; }
.stat-value { display: block; font-size: 24px; font-weight: 700; color: #003d9b; }
.stat-label { font-size: 12px; color: #737685; }
.preview-chart { display: flex; align-items: flex-end; gap: 12px; height: 120px; }
.chart-bar { flex: 1; background: rgba(0, 82, 204, 0.2); border-radius: 6px 6px 0 0; }
.chart-bar.active { background: #0052cc; }

/* Statistics */
.statistics { padding: 40px 0; background: white; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.stat-card {
  text-align: center; padding: 24px; background: #faf9ff;
  border-radius: 20px; border: 1px solid rgba(195, 198, 214, 0.2);
}
.stat-number { font-size: 36px; font-weight: 800; color: #003d9b; }
.statistics .stat-label { font-size: 14px; color: #434654; margin: 8px 0; }
.stat-trend { font-size: 12px; color: #10b981; }

/* Features */
.features { padding: 60px 0; background: #faf9ff; }
.section-header { text-align: center; margin-bottom: 48px; }
.section-title { font-size: 32px; font-weight: 700; color: #051a3e; margin-bottom: 12px; }
.section-subtitle { font-size: 16px; color: #434654; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.feature-card {
  background: white; padding: 32px 24px; border-radius: 20px;
  text-align: center; border: 1px solid rgba(195, 198, 214, 0.2);
}
.feature-icon { font-size: 48px; margin-bottom: 20px; }
.feature-title { font-size: 18px; font-weight: 600; color: #051a3e; margin-bottom: 12px; }
.feature-desc { font-size: 14px; color: #737685; line-height: 1.5; }

/* ===== OVERLAY ===== */
.overlay {
  position: fixed; inset: 0; z-index: 1;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* ===== NÚT BACK — CỐ ĐỊNH GÓC TRÊN TRÁI ===== */
.btn-back {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.btn-back:hover {
  background: rgba(255, 255, 255, 0.28);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateX(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
.btn-back-arrow {
  font-size: 18px;
  line-height: 1;
  transition: transform 0.25s;
}
.btn-back:hover .btn-back-arrow {
  transform: translateX(-3px);
}

/* ===== LOGIN MODAL ===== */
.login-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  padding: 20px;
  animation: slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(32px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.auth-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.35);
  overflow: hidden;
}

.auth-header {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  padding: 28px 24px;
  text-align: center;
}
.auth-header .logo { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }
.auth-header .logo-icon { font-size: 32px; }
.auth-header .logo-text { font-size: 17px; font-weight: 700; color: white; letter-spacing: 0.5px; }

.auth-tabs { display: flex; background: rgba(255,255,255,0.1); border-radius: 12px; padding: 4px; gap: 4px; }
.tab-btn { flex: 1; padding: 9px; border: none; background: transparent; color: #94a3b8; font-size: 15px; font-weight: 600; cursor: pointer; border-radius: 8px; transition: all 0.25s; }
.tab-btn.active { background: #6366f1; color: white; box-shadow: 0 4px 12px rgba(99,102,241,0.35); }

.auth-form { padding: 24px 24px 20px; }

.form-group { margin-bottom: 16px; }
.form-group label { display: block; margin-bottom: 7px; font-size: 12px; font-weight: 600; color: #334155; text-transform: uppercase; letter-spacing: 0.5px; }

.input-wrap { position: relative; display: flex; align-items: center; }
.input-prefix { position: absolute; left: 12px; font-size: 16px; color: #94a3b8; pointer-events: none; }

.form-group input,
.input-wrap input {
  width: 100%; padding: 11px 40px 11px 38px;
  border: 2px solid #e2e8f0; border-radius: 12px;
  font-size: 14px; transition: all 0.25s;
  box-sizing: border-box; background: #fafafa;
}
.form-group input:focus,
.input-wrap input:focus {
  outline: none; border-color: #6366f1;
  background: white; box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
}
.toggle-password { position: absolute; right: 12px; background: none; border: none; cursor: pointer; font-size: 16px; color: #94a3b8; padding: 0; line-height: 1; }

.form-row { display: flex; gap: 14px; }
.form-group.half { flex: 1; }
.form-group.half input { padding: 11px 36px 11px 12px; width: 100%; box-sizing: border-box; }

.form-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.checkbox { display: flex; align-items: center; gap: 7px; font-size: 13px; color: #64748b; cursor: pointer; }
.checkbox input[type="checkbox"] { width: 15px; height: 15px; margin: 0; cursor: pointer; flex-shrink: 0; }
.checkbox span { flex: 1; }
.checkbox a { color: #6366f1; text-decoration: none; }
.forgot-link { font-size: 13px; color: #6366f1; text-decoration: none; }
.forgot-link:hover { text-decoration: underline; }

.btn-submit {
  width: 100%; padding: 13px; border: none; border-radius: 12px;
  font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.25s;
  background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;
}
.btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }
.btn-submit.register { background: linear-gradient(135deg, #10b981, #059669); }
.btn-submit.register:hover { box-shadow: 0 8px 20px rgba(16,185,129,0.4); }
.btn-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; box-shadow: none; }

/* ===== SOCIAL LOGIN ===== */
.social-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0 16px;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}
.divider-text {
  font-size: 12px;
  color: #94a3b8;
  white-space: nowrap;
  font-weight: 500;
}

.social-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 4px;
}

.btn-social {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 11px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  border: 2px solid #e2e8f0;
  background: white;
  color: #334155;
}
.btn-social:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}
.btn-google:hover { border-color: #4285F4; background: #f8fbff; }
.btn-facebook:hover { border-color: #1877F2; background: #f0f5ff; }

.social-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}


.register-link {
  text-align: center;
  margin-top: 18px;
  font-size: 14px;
  color: #64748b;
}
.register-link span {
  color: #6366f1;
  font-weight: 700;
  cursor: pointer;
  margin-left: 4px;
}
.register-link span:hover {
  text-decoration: underline;
}

/* ===== MESSAGES ===== */
.error-message {
  margin: 0 24px 20px; padding: 11px;
  background: #fee2e2; border-left: 4px solid #ef4444;
  border-radius: 8px; color: #b91c1c; font-size: 13px;
}
.success-message {
  margin: 0 24px 20px; padding: 11px;
  background: #d1fae5; border-left: 4px solid #10b981;
  border-radius: 8px; color: #065f46; font-size: 13px;
}

.auth-footer { text-align: center; padding: 16px; color: rgba(255,255,255,0.7); font-size: 12px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .form-row { flex-direction: column; gap: 0; }
  .auth-form { padding: 20px 16px 16px; }
  .auth-card { border-radius: 18px; }
  .social-buttons { gap: 8px; }
  .btn-social { font-size: 13px; padding: 10px 10px; }
}
</style>