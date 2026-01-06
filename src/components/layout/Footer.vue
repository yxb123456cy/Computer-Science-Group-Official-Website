<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          <img src="@/assets/images/team-logo.png" alt="Logo">
          <span>计算机科技小组</span>
        </div>
        <p class="copyright">
          © 2026 南昌航空大学科技学院-计算机科技小组 版权所有
        </p>
      </div>
      <div class="footer-right">
        <div class="footer-links">
          <a-link href="#">
            关于我们
          </a-link>
          <a-link href="#">
            加入我们
          </a-link>
          <a-link href="#">
            联系我们
          </a-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.footer {
  color: black;
  padding: 20px 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  img {
    height: 30px;
    // filter: brightness(0) invert(1);
  }

  span {
    font-size: 18px;
    font-weight: 600;
  }
}

.copyright {
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  :deep(.arco-link) {
    transition: all 0.3s;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
