<template>
  <div class="page-root">

    <!-- ===== DASHBOARD BACKGROUND ===== -->
    <div class="dashboard-bg" aria-hidden="true">
      <div class="dashboard-container">
        <div class="dashboard-header">
          <h1 class="dashboard-title">
            📊 Tổng quan hệ thống
            <span class="badge bg-primary">2025</span>
          </h1>
          <p class="text-muted">Chào mừng bạn trở lại! Dưới đây là thống kê tổng hợp từ hệ thống.</p>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="stat-card user-card">
              <div class="stat-icon">👥</div>
              <div class="stat-content">
                <h3 class="stat-value">128</h3>
                <p class="stat-label">Người dùng</p>
                <div class="stat-detail">
                  <span class="sbadge">👑 Admin: 5</span>
                  <span class="sbadge">👤 Staff: 123</span>
                </div>
              </div>
              <div class="stat-trend">📈 +12%</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card order-card">
              <div class="stat-icon">🛒</div>
              <div class="stat-content">
                <h3 class="stat-value">3,420</h3>
                <p class="stat-label">Đơn hàng</p>
                <div class="stat-detail"><span class="sbadge">125.000.000 ₫</span></div>
              </div>
              <div class="stat-trend">📈 +8%</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card product-card">
              <div class="stat-icon">📦</div>
              <div class="stat-content">
                <h3 class="stat-value">156</h3>
                <p class="stat-label">Sản phẩm</p>
                <div class="stat-detail"><span class="sbadge">📊 Tồn kho: 2,340</span></div>
              </div>
              <div class="stat-trend">📈 +5%</div>
            </div>
          </div>
        </div>
        <div class="row g-4 mt-2">
          <div class="col-md-7">
            <div class="chart-card">
              <div class="chart-header">
                <h5 class="chart-title">📈 Doanh thu theo tháng</h5>
                <p class="chart-subtitle">Biểu đồ doanh thu 12 tháng gần nhất</p>
              </div>
              <div class="chart-body">
                <div class="fake-bars">
                  <div class="fake-bar" style="height:55%"><span class="bar-label">T1</span></div>
                  <div class="fake-bar" style="height:65%"><span class="bar-label">T2</span></div>
                  <div class="fake-bar" style="height:50%"><span class="bar-label">T3</span></div>
                  <div class="fake-bar" style="height:80%"><span class="bar-label">T4</span></div>
                  <div class="fake-bar" style="height:70%"><span class="bar-label">T5</span></div>
                  <div class="fake-bar" style="height:90%"><span class="bar-label">T6</span></div>
                  <div class="fake-bar" style="height:75%"><span class="bar-label">T7</span></div>
                  <div class="fake-bar" style="height:85%"><span class="bar-label">T8</span></div>
                  <div class="fake-bar" style="height:60%"><span class="bar-label">T9</span></div>
                  <div class="fake-bar" style="height:95%"><span class="bar-label">T10</span></div>
                  <div class="fake-bar" style="height:88%"><span class="bar-label">T11</span></div>
                  <div class="fake-bar" style="height:100%"><span class="bar-label">T12</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="chart-card">
              <div class="chart-header">
                <h5 class="chart-title">🏆 Sản phẩm bán chạy</h5>
                <p class="chart-subtitle">Top 5 sản phẩm có doanh số cao nhất</p>
              </div>
              <div class="chart-body donut-wrap">
                <div class="donut-ring"></div>
                <div class="donut-labels">
                  <div class="dlabel"><span class="dot" style="background:#3b82f6"></span>iPhone 15</div>
                  <div class="dlabel"><span class="dot" style="background:#10b981"></span>Samsung S24</div>
                  <div class="dlabel"><span class="dot" style="background:#f59e0b"></span>Laptop Dell</div>
                  <div class="dlabel"><span class="dot" style="background:#ef4444"></span>Sony WH-1000</div>
                  <div class="dlabel"><span class="dot" style="background:#8b5cf6"></span>iPad Pro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <div class="chart-card">
              <div class="chart-header">
                <h5 class="chart-title">🔄 Hoạt động gần đây</h5>
              </div>
              <div class="activity-body">
                <div class="activity-item"><span class="activity-icon">✅</span><div class="activity-content"><strong>Đăng nhập thành công</strong><small>Hôm nay, 09:12</small></div></div>
                <div class="activity-item"><span class="activity-icon">📊</span><div class="activity-content"><strong>Dashboard đã được tải</strong><small>Dữ liệu được cập nhật mới nhất</small></div></div>
                <div class="activity-item"><span class="activity-icon">🛒</span><div class="activity-content"><strong>Đơn hàng mới #3421</strong><small>2 phút trước</small></div></div>
              </div>
            </div>
          </div>
        </div>
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
  // Tích hợp Google OAuth — cấu hình theo backend của bạn
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google?prompt=select_account`;
};

// Xử lý đăng nhập/đăng ký bằng Facebook
const handleFacebookAuth = () => {
  // Tích hợp Facebook OAuth — cấu hình theo backend của bạn
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

/* ===== DASHBOARD BACKGROUND ===== */
.dashboard-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: #f5f7fa;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}
.dashboard-container { padding: 24px; min-height: 100vh; }
.dashboard-header { margin-bottom: 24px; }
.dashboard-title { font-size: 26px; font-weight: 700; color: #1e293b; margin-bottom: 6px; }
.badge { background: #3b82f6; color: white; padding: 3px 10px; border-radius: 10px; font-size: 12px; margin-left: 8px; }
.text-muted { color: #64748b; font-size: 14px; margin: 0; }

.row { display: flex; flex-wrap: wrap; margin: 0 -10px; }
.col-md-4 { width: 33.33%; padding: 0 10px; box-sizing: border-box; }
.col-md-5 { width: 41.66%; padding: 0 10px; box-sizing: border-box; }
.col-md-7 { width: 58.33%; padding: 0 10px; box-sizing: border-box; }
.col-12 { width: 100%; padding: 0 10px; box-sizing: border-box; }
.g-4 > * { margin-bottom: 20px; }
.mt-2 { margin-top: 8px; }
.mt-4 { margin-top: 20px; }

.stat-card {
  border-radius: 18px; padding: 18px;
  display: flex; align-items: center; gap: 14px;
  color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.user-card { background: linear-gradient(135deg, #667eea, #764ba2); }
.order-card { background: linear-gradient(135deg, #11998e, #38ef7d); }
.product-card { background: linear-gradient(135deg, #f2994a, #f2c94c); }
.stat-icon { font-size: 40px; }
.stat-content { flex: 1; }
.stat-value { font-size: 28px; font-weight: 700; margin: 0; line-height: 1.1; }
.stat-label { font-size: 13px; opacity: 0.9; margin: 4px 0 0 0; }
.stat-detail { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
.sbadge { font-size: 10px; background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 10px; }
.stat-trend { font-size: 12px; opacity: 0.85; white-space: nowrap; }

.chart-card { background: white; border-radius: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.07); overflow: hidden; }
.chart-header { padding: 16px 20px; border-bottom: 1px solid #e2e8f0; }
.chart-title { font-size: 16px; font-weight: 600; color: #1e293b; margin: 0; }
.chart-subtitle { font-size: 12px; color: #64748b; margin: 3px 0 0 0; }
.chart-body { padding: 16px 20px; }

.fake-bars { display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-bottom: 20px; }
.fake-bar { flex: 1; background: linear-gradient(to top, #3b82f6, #93c5fd); border-radius: 4px 4px 0 0; position: relative; min-height: 10px; }
.bar-label { position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%); font-size: 9px; color: #94a3b8; white-space: nowrap; }

.donut-wrap { display: flex; align-items: center; gap: 20px; }
.donut-ring { width: 100px; height: 100px; border-radius: 50%; border: 18px solid transparent; background: conic-gradient(#3b82f6 0deg 163deg, #10b981 163deg 300deg, #f59e0b 300deg 391deg, #ef4444 391deg 499deg, #8b5cf6 499deg 360deg) border-box; flex-shrink: 0; }
.donut-labels { display: flex; flex-direction: column; gap: 6px; }
.dlabel { display: flex; align-items: center; gap: 7px; font-size: 12px; color: #334155; }
.dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.activity-body { padding: 0; }
.activity-item { display: flex; align-items: center; gap: 12px; padding: 10px 20px; border-bottom: 1px solid #f1f5f9; }
.activity-icon { font-size: 20px; }
.activity-content { display: flex; justify-content: space-between; align-items: center; flex: 1; flex-wrap: wrap; }
.activity-content strong { color: #1e293b; font-size: 13px; }
.activity-content small { color: #64748b; font-size: 11px; }

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
.logo { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }
.logo-icon { font-size: 32px; }
.logo-text { font-size: 17px; font-weight: 700; color: white; letter-spacing: 0.5px; }

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