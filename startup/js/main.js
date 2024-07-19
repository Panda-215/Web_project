(function ($) {
    "use strict";

    // Spinner ฟังก์ชันนี้จะซ่อนองค์ประกอบที่มี ID spinner หลังจากรอ 1 มิลลิวินาที โดยลบคลาส show ออกจากองค์ประกอบนั้น
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs ฟังก์ชันนี้จะเริ่มใช้งาน wow.js ซึ่งเป็นไลบรารีที่ช่วยเพิ่มเอฟเฟกต์ ใช้ร่วม animate.cssการแสดงผลเมื่อเลื่อนหน้าจอ
    new WOW().init();


    // Sticky Navbar ฟังก์ชันนี้จะตรวจสอบตำแหน่งการเลื่อนหน้าจอ ถ้าเลื่อนหน้าจอมากกว่า 45 พิกเซล แถบเมนูจะได้รับคลาส sticky-top และ shadow-sm ทำให้มันติดอยู่ด้านบนของหน้าจอและเพิ่มเงา
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover ฟังก์ชันนี้จะทำให้ dropdown menu แสดงเมื่อเอาเมาส์วางที่เมนู ถ้าขนาดหน้าจอกว้างกว่า 992 พิกเซล (desktop) ถ้าเป็นหน้าจอเล็ก (mobile) dropdown menu จะไม่ทำงานเมื่อเอาเมาส์วาง
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter ฟังก์ชันนี้จะใช้งานไลบรารี counterUp เพื่อแสดงการนับเลขขึ้นเมื่อผู้ใช้เลื่อนมาถึงองค์ประกอบที่กำหนด


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button ฟังก์ชันนี้จะทำให้ปุ่ม "Back to Top" แสดงขึ้นเมื่อผู้ใช้เลื่อนลงมามากกว่า 100 พิกเซล และเมื่อคลิกปุ่มนั้น หน้าจอจะเลื่อนกลับขึ้นไปด้านบนอย่างนุ่มนวล


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel ฟังก์ชันนี้จะสร้าง carousel สำหรับ testimonials โดยใช้ไลบรารี owlCarousel โดยมีการตั้งค่าให้เล่นอัตโนมัติ (autoplay) และการตั้งค่าความเร็วในการเปลี่ยนแผ่น (smartSpeed)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel ฟังก์ชันนี้จะสร้าง carousel สำหรับ vendors โดยใช้ไลบรารี owlCarousel โดยมีการตั้งค่าให้เล่นอัตโนมัติ (autoplay) และการตั้งค่าความเร็วในการเปลี่ยนแผ่น (smartSpeed)


    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

