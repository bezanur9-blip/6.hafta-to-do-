// 1. Elementleri seçip değişkenlere atıyoruz (Köprüleri kuruyoruz)
const girisKutusu = document.getElementById("veri-kutusu");
const listeKutusu = document.getElementById("liste");

// --- ÖDEV BÖLÜMÜ: ENTER TUŞU DESTEĞİ ---
// Giriş kutusunda bir tuşa basıldığında çalışır
girisKutusu.addEventListener("keydown", function(event) {
    // Eğer basılan tuş "Enter" ise elemanEkle fonksiyonunu çağır
    if (event.key === "Enter") {
        elemanEkle();
    }
});

// 2. Eleman Ekleme Fonksiyonu
function elemanEkle() {
    const metin = girisKutusu.value.trim(); // Boşlukları temizleyerek metni al

    // KONTROL: Kutucuk boş mu?
    if (metin === '') {
        alert("Lütfen bir görev yazın!");
        return; // Fonksiyonu burada durdur
    }

    // A. YARATMA: Yeni bir <li> elementi oluştur
    let li = document.createElement("li");
    
    // B. İÇERİK: İçeriği input'tan al
    li.innerHTML = metin;

    // --- ÖDEV BÖLÜMÜ: ACİL DURUM RENGİ ---
    // Eğer metin içinde "Acil" kelimesi geçiyorsa (Büyük/Küçük harf duyarlı)
    if (metin.includes("Acil") || metin.includes("acil")) {
        // li elementine özel bir stil veriyoruz
        li.style.backgroundColor = "#ff7675"; // Açık kırmızı/pembe tonu
        li.style.color = "white"; // Yazıyı beyaz yaparak okunurluğu artırıyoruz
        li.style.fontWeight = "bold";
    }

    // C. SİLME BUTONU YARAT
    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(span); // Çöp kutusunu listenin içine monte et

    // D. MONTAJ: Hazırlanan <li> elementini <ul> içine ekle
    listeKutusu.appendChild(li);

    // TEMİZLİK: Giriş alanını boşalt ve odağı (focus) oraya çek
    girisKutusu.value = "";
    girisKutusu.focus();
}

// 3. LİSTE OLAYLARI (Tıklama ve Silme) - Event Delegation
listeKutusu.addEventListener("click", function(olay) {
    
    // Tıklanan yer bir LI ise (Görevi tamamla/geri al)
    if (olay.target.tagName === "LI") {
        olay.target.classList.toggle("yapildi");
    }
    
    // Tıklanan yer SPAN veya I (İkon) ise (Görevi sil)
    else if (olay.target.tagName === "SPAN" || olay.target.tagName === "I") {
        // En yakın LI ebeveynini bul ve komple kaldır
        olay.target.closest("li").remove();
    }
    
}, false);
