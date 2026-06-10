function showToast(msg, duration = 2800) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), duration);
    }

    function handleProceed(e) {
      // Ripple effect
      const btn = e.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const rect = btn.getBoundingClientRect();
      circle.classList.add('ripple');
      circle.style.cssText = `width:${diameter}px;height:${diameter}px;left:${e.clientX-rect.left-diameter/2}px;top:${e.clientY-rect.top-diameter/2}px`;
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
      showToast('Redirecting to payment… 🎵');
    }

    function handleChange() {
      showToast('Plan options coming soon!');
    }

    function handleCancel() {
      if (confirm('Are you sure you want to cancel your order?')) {
        showToast('Order cancelled. See you soon! 👋', 3000);
      }
    }