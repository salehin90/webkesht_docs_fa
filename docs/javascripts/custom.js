 // تابع باز و بسته کردن بخش‌های اصلی
        function toggleSection(header) {
            const content = header.nextElementSibling;
            const isCollapsed = content.classList.contains('collapsed');

            if (isCollapsed) {
                content.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }

        // تابع باز و بسته کردن زیربخش‌ها
        function toggleSubSection(header) {
            const content = header.nextElementSibling;
            const isCollapsed = content.classList.contains('collapsed');

            if (isCollapsed) {
                content.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }