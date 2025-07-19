Gemini

2.5 Flash

Upgrade



Conversation with Gemini
apakah saya harus mengintegrasikan file ini:

<?php

/**

 * Tema Functions

 *

 * Ini adalah file functions.php untuk tema WordPress Anda.

 * Digunakan untuk menambahkan fungsionalitas kustom, termasuk

 * REST API endpoints untuk integrasi dengan frontend React.

 */



// Exit if accessed directly

if ( !defined( 'ABSPATH' ) ) exit;



// BEGIN ENQUEUE PARENT ACTION

// AUTO GENERATED - Do not modify or remove comment markers above or below:



if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):

    function chld_thm_cfg_locale_css( $uri ){

        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )

            $uri = get_template_directory_uri() . '/rtl.css';

        return $uri;

    }

endif;

add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );



// END ENQUEUE PARENT ACTION





// =====================================================================

// 1. Pengaturan CORS (Cross-Origin Resource Sharing)

//    Penting agar frontend React di Netlify dapat mengakses API WordPress.

// =====================================================================

function add_cors_http_header() {

    // === UPDATE: Definisikan domain frontend React Anda di sini ===

    // Pastikan ini sesuai dengan domain yang akan mengakses API Anda.

    // Tambahkan domain lain jika diperlukan (misal: staging, localhost untuk dev).

    $allowed_origins = array(

        'https://impactinstitute.asia',      // Domain produksi situs React Anda

        // 'http://localhost:3000',           // Untuk pengembangan lokal React

        // 'https://staging.impactinstitute.asia', // Jika ada domain staging

    );



    $origin = get_http_origin(); // Mengambil Origin dari header request



    if ( in_array( $origin, $allowed_origins ) ) {

        header( "Access-Control-Allow-Origin: " . $origin );

    } else {

        // Jika origin tidak diizinkan, jangan kirim header Access-Control-Allow-Origin

        // Ini akan menyebabkan browser memblokir permintaan, yang merupakan perilaku aman.

        // Anda bisa menambahkan log di sini jika ingin melacak upaya akses yang tidak sah.

    }



    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");

    // === UPDATE: Tambahkan 'X-API-KEY' ke Access-Control-Allow-Headers ===

    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-API-KEY");

    header("Access-Control-Allow-Credentials: true"); // Penting jika Anda akan menggunakan cookie/otentikasi sesi

    header("Access-Control-Max-Age: 600"); // Cache preflight OPTIONS requests selama 10 menit



    // Untuk preflight OPTIONS request

    if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {

        status_header( 200 );

        exit();

    }

}

add_action( 'init', 'add_cors_http_header' );





// =====================================================================

// 2. Registrasi Custom Post Type untuk Pendaftaran Lahan Petani

//    Ini akan membuat jenis postingan baru di WordPress untuk menyimpan data formulir petani.

// =====================================================================

function register_farmer_registration_cpt() {

    $labels = array(

        'name'                  => _x( 'Pendaftaran Petani', 'Post Type General Name', 'impact-institute' ),

        'singular_name'         => _x( 'Pendaftaran Petani', 'Post Type Singular Name', 'impact-institute' ),

        'menu_name'             => __( 'Pendaftaran Petani', 'impact-institute' ),

        'name_admin_bar'        => __( 'Pendaftaran Petani', 'impact-institute' ),

        'archives'              => __( 'Arsip Pendaftaran Petani', 'impact-institute' ),

        'attributes'            => __( 'Atribut Pendaftaran Petani', 'impact-institute' ),

        'parent_item_colon'     => __( 'Item Induk:', 'impact-institute' ),

        'all_items'             => __( 'Semua Pendaftaran', 'impact-institute' ),

        'add_new_item'          => __( 'Tambah Pendaftaran Baru', 'impact-institute' ),

        'add_new'               => __( 'Tambah Baru', 'impact-institute' ),

        'new_item'              => __( 'Pendaftaran Baru', 'impact-institute' ),

        'edit_item'             => __( 'Edit Pendaftaran', 'impact-institute' ),

        'update_item'           => __( 'Perbarui Pendaftaran', 'impact-institute' ),

        'view_item'             => __( 'Lihat Pendaftaran', 'impact-institute' ),

        'view_items'            => __( 'Lihat Pendaftaran', 'impact-institute' ),

        'search_items'          => __( 'Cari Pendaftaran', 'impact-institute' ),

        'not_found'             => __( 'Tidak Ditemukan', 'impact-institute' ),

        'not_found_in_trash'    => __( 'Tidak Ditemukan di Sampah', 'impact-institute' ),

        'featured_image'        => __( 'Gambar Unggulan', 'impact-institute' ),

        'set_featured_image'    => __( 'Atur Gambar Unggulan', 'impact-institute' ),

        'remove_featured_image' => __( 'Hapus Gambar Unggulan', 'impact-institute' ),

        'use_featured_image'    => __( 'Gunakan sebagai Gambar Unggulan', 'impact-institute' ),

        'insert_into_item'      => __( 'Sisipkan ke item', 'impact-institute' ),

        'uploaded_to_this_item' => __( 'Diunggah ke item ini', 'impact-institute' ),

        'items_list'            => __( 'Daftar Pendaftaran', 'impact-institute' ),

        'items_list_navigation' => __( 'Navigasi Daftar Pendaftaran', 'impact-institute' ),

        'filter_items_list'     => __( 'Filter daftar pendaftaran', 'impact-institute' ),

    );

    $args = array(

        'label'                 => __( 'Pendaftaran Petani', 'impact-institute' ),

        'description'           => __( 'Formulir pendaftaran lahan dari petani', 'impact-institute' ),

        'labels'                => $labels,

        'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ), // 'editor' untuk konten formulir, 'custom-fields' untuk ACF

        'hierarchical'          => false,

        'public'                => false, // Tidak ditampilkan di frontend publik

        'show_ui'               => true,

        'show_in_menu'          => true,

        'menu_position'         => 5,

        'menu_icon'             => 'dashicons-groups',

        'show_in_admin_bar'     => true,

        'show_in_nav_menus'     => true,

        'can_export'            => true,

        'has_archive'           => false,

        'exclude_from_search'   => true,

        'publicly_queryable'    => false,

        'capability_type'       => 'post',

        'show_in_rest'          => true, // Penting untuk REST API

        'rest_base'             => 'farmer-registrations', // Endpoint API: wp-json/wp/v2/farmer-registrations

    );

    register_post_type( 'farmer_registration', $args );

}

add_action( 'init', 'register_farmer_registration_cpt', 0 );





// =====================================================================

// 3. Registrasi Custom Post Type untuk Data Carbon Buyer

//    Ini akan membuat jenis postingan baru di WordPress untuk menyimpan data formulir pembeli karbon.

// =====================================================================

function register_carbon_buyer_cpt() {

    $labels = array(

        'name'                  => _x( 'Data Carbon Buyer', 'Post Type General Name', 'impact-institute' ),

        'singular_name'         => _x( 'Data Carbon Buyer', 'Post Type Singular Name', 'impact-institute' ),

        'menu_name'             => __( 'Data Carbon Buyer', 'impact-institute' ),

        'name_admin_bar'        => __( 'Carbon Buyer', 'impact-institute' ),

        'all_items'             => __( 'Semua Carbon Buyer', 'impact-institute' ),

        'add_new_item'          => __( 'Tambah Data Buyer Baru', 'impact-institute' ),

        'add_new'               => __( 'Tambah Baru', 'impact-institute' ),

        'new_item'              => __( 'Data Buyer Baru', 'impact-institute' ),

        'edit_item'             => __( 'Edit Data Buyer', 'impact-institute' ),

        'update_item'           => __( 'Perbarui Data Buyer', 'impact-institute' ),

        'view_item'             => __( 'Lihat Data Buyer', 'impact-institute' ),

        'search_items'          => __( 'Cari Data Buyer', 'impact-institute' ),

        'not_found'             => __( 'Tidak Ditemukan', 'impact-institute' ),

        'not_found_in_trash'    => __( 'Tidak Ditemukan di Sampah', 'impact-institute' ),

    );

    $args = array(

        'label'                 => __( 'Carbon Buyer', 'impact-institute' ),

        'description'           => __( 'Data pendaftaran atau kontak dari pembeli karbon', 'impact-institute' ),

        'labels'                => $labels,

        'supports'              => array( 'title', 'editor', 'custom-fields' ), // 'editor' untuk konten formulir, 'custom-fields' untuk ACF

        'hierarchical'          => false,

        'public'                => false, // Tidak ditampilkan di frontend publik

        'show_ui'               => true,

        'show_in_menu'          => true,

        'menu_position'         => 6, // Di bawah Pendaftaran Petani

        'menu_icon'             => 'dashicons-chart-area', // Ikon yang sesuai

        'show_in_admin_bar'     => true,

        'show_in_nav_menus'     => true,

        'can_export'            => true,

        'has_archive'           => false,

        'exclude_from_search'   => true,

        'publicly_queryable'    => false,

        'capability_type'       => 'post',

        'show_in_rest'          => true, // Penting untuk REST API

        'rest_base'             => 'carbon-buyers', // Endpoint API: wp-json/wp/v2/carbon-buyers

    );

    register_post_type( 'carbon_buyer', $args );

}

add_action( 'init', 'register_carbon_buyer_cpt', 0 );





// =====================================================================

// 4. Endpoint REST API Kustom untuk Formulir Pendaftaran Lahan Petani

//    Menerima data dari React (misal ForFarmers.jsx) dan menyimpan ke CPT.

// =====================================================================

function handle_farmer_registration_form_submission( $request ) {

    $params = $request->get_params(); // get_params() cocok untuk application/x-www-form-urlencoded atau multipart/form-data



    // Validasi dasar (Anda bisa menambahkan validasi yang lebih ketat)

    if ( empty( $params['namaLengkap'] ) || empty( $params['email'] ) || empty( $params['luasLahan'] ) ) {

        return new WP_Error( 'missing_fields', 'Mohon lengkapi semua bidang yang diperlukan.', array( 'status' => 400 ) );

    }



    // Buat postingan baru di CPT 'farmer_registration'

    $post_title = 'Pendaftaran Lahan: ' . sanitize_text_field($params['namaLengkap']) . ' - ' . sanitize_text_field($params['provinsi']);

    $post_content = '';

    // Memasukkan semua parameter form ke post_content agar mudah dilihat di admin

    foreach ($params as $key => $value) {

        // Hindari menambahkan file ke konten post utama, akan ditangani terpisah

        if (strpos($key, 'foto_lahan') === false && $key !== 'pernyataan_kesediaan') {

            if (is_array($value)) {

                $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(implode(', ', array_map('sanitize_text_field', $value))) . '<br>';

            } else {

                $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(sanitize_text_field($value)) . '<br>';

            }

        }

    }



    $post_data = array(

        'post_title'    => $post_title,

        'post_content'  => $post_content,

        'post_status'   => 'pending', // Atau 'publish' jika Anda ingin langsung menerbitkan

        'post_type'     => 'farmer_registration',

    );



    $post_id = wp_insert_post( $post_data, true );



    if ( is_wp_error( $post_id ) ) {

        return new WP_Error( 'post_creation_failed', 'Gagal menyimpan pendaftaran.', array( 'status' => 500, 'details' => $post_id->get_error_message() ) );

    }



    // --- Tangani Unggahan File (foto_lahan dan pernyataan_kesediaan) ---

    // === REKOMENDASI KUAT: Gunakan plugin Advanced Custom Fields (ACF) ===

    // Untuk mengelola bidang "File" atau "Gallery" pada CPT "Pendaftaran Petani".

    // Ini akan membuat pengelolaan file di admin lebih mudah dan terintegrasi.

    // Jika menggunakan ACF, Anda akan memanggil update_field() setelah wp_insert_attachment.



    $uploaded_files_info = [];

    $files_to_handle = ['foto_lahan', 'pernyataan_kesediaan']; // Field nama file dari form



    // --- UPDATE: Memastikan fungsi media tersedia sebelum digunakan ---

    require_once( ABSPATH . 'wp-admin/includes/image.php' );

    require_once( ABSPATH . 'wp-admin/includes/file.php' );

    require_once( ABSPATH . 'wp-admin/includes/media.php' );



    foreach ($files_to_handle as $file_field_name) {

        if ( ! empty( $_FILES[$file_field_name] ) ) {

            $files_array = $_FILES[$file_field_name];



            // If it's a single file upload, make it an array for consistent processing

            if (!is_array($files_array['name'])) {

                $files_array['name'] = [$files_array['name']];

                $files_array['type'] = [$files_array['type']];

                $files_array['tmp_name'] = [$files_array['tmp_name']];

                $files_array['error'] = [$files_array['error']];

                $files_array['size'] = [$files_array['size']];

            }



            $file_count = count($files_array['name']);



            for ($i = 0; $i < $file_count; $i++) {

                if ($files_array['error'][$i] === UPLOAD_ERR_OK) {

                    $file_item = array(

                        'name'     => $files_array['name'][$i],

                        'type'     => $files_array['type'][$i],

                        'tmp_name' => $files_array['tmp_name'][$i],

                        'error'    => $files_array['error'][$i],

                        'size'     => $files_array['size'][$i],

                    );



                    // === UPDATE: Validasi tipe file dan ukuran (contoh) ===

                    $allowed_mimes = array(

                        'jpg|jpeg|jpe' => 'image/jpeg',

                        'png'          => 'image/png',

                        'pdf'          => 'application/pdf',

                        // Tambahkan tipe file lain yang diizinkan di sini

                    );

                    $file_info = wp_check_filetype( $file_item['name'], $allowed_mimes );



                    // Batas ukuran file (contoh: 5MB)

                    $max_file_size = 5 * 1024 * 1024; // 5 MB in bytes



                    if ( ! $file_info['ext'] ) {

                        error_log( 'Disallowed file type attempted for ' . $file_field_name . ': ' . $file_item['name'] );

                        // Tidak menghentikan proses jika ada file lain yang valid, hanya melog error

                        continue; // Lewati file yang tidak valid ini

                    }

                    if ( $file_item['size'] > $max_file_size ) {

                        error_log( 'File size too large for ' . $file_field_name . ': ' . $file_item['name'] );

                        continue; // Lewati file yang terlalu besar ini

                    }



                    $upload_overrides = array( 'test_form' => false );

                    $movefile = wp_handle_upload( $file_item, $upload_overrides );



                    if ( $movefile && ! isset( $movefile['error'] ) ) {

                        $attachment = array(

                            'guid'           => $movefile['url'],

                            'post_mime_type' => $movefile['type'],

                            'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $movefile['file'] ) ),

                            'post_content'   => '',

                            'post_status'    => 'inherit'

                        );



                        $attachment_id = wp_insert_attachment( $attachment, $movefile['file'], $post_id );

                        wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $movefile['file'] ) );



                        // Simpan ID attachment ke post meta untuk memudahkan pengambilan atau tampilan di admin

                        // === CATATAN: Jika menggunakan ACF, ganti baris ini dengan update_field() ===

                        $uploaded_files_info[$file_field_name][] = $attachment_id;

                    } else {

                        error_log( 'Error uploading file (' . $file_field_name . '): ' . (isset($movefile['error']) ? $movefile['error'] : 'Unknown error') );

                    }

                } else {

                    error_log( 'File upload error for ' . $file_field_name . ': ' . $files_array['error'][$i] );

                }

            }

        }

    }



    // Simpan ID attachment yang diunggah ke post meta

    // === CATATAN: Jika menggunakan ACF, bagian ini mungkin tidak lagi dibutuhkan ===

    if ( ! empty( $uploaded_files_info ) ) {

        foreach ($uploaded_files_info as $field_name => $attachment_ids) {

            update_post_meta( $post_id, '_' . $field_name, $attachment_ids );

        }

    }



    // --- Kirim email notifikasi ke buyer@impactinstitute.asia ---

    $to = 'buyer@impactinstitute.asia'; // Ganti dengan alamat email penerima yang sebenarnya

    $subject = 'Pendaftaran Lahan Baru dari Petani: ' . sanitize_text_field($params['namaLengkap']);

    $body = "Detail Pendaftaran Lahan Baru:\n\n";

    foreach ($params as $key => $value) {

        if (is_array($value)) {

            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key))) . ": " . implode(', ', array_map('sanitize_text_field', $value)) . "\n";

        } else {

            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key))) . ": " . sanitize_text_field($value) . "\n";

        }

    }

    // Tambahkan info URL file yang terunggah ke email

    if (!empty($uploaded_files_info)) {

        $body .= "\nFile Terunggah:\n";

        foreach ($uploaded_files_info as $field_name => $attachment_ids) {

            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $field_name))) . ":\n";

            foreach ($attachment_ids as $attachment_id) {

                $body .= wp_get_attachment_url($attachment_id) . "\n";

            }

        }

        $body .= "\n";

    }



    $headers = array('Content-Type: text/plain; charset=UTF-8');

    // === CATATAN PENTING: Untuk pengiriman email yang andal, instal plugin SMTP ===

    // Contoh: WP Mail SMTP. Ganti dengan email pengirim yang valid di layanan SMTP Anda.

    $headers[] = 'From: Website Impact Institute <noreply@impactinstitute.asia>';

    $headers[] = 'Reply-To: ' . sanitize_email($params['email']);



    wp_mail( $to, $subject, $body, $headers );



    return new WP_REST_Response( array( 'message' => 'Pendaftaran berhasil disimpan dan email notifikasi dikirim.', 'post_id' => $post_id ), 200 );

}



add_action( 'rest_api_init', function () {

    register_rest_route( 'custom/v1', '/submit-farmer-registration', array(

        'methods'                   => 'POST',

        'callback'                  => 'handle_farmer_registration_form_submission',

        'permission_callback'       => function( $request ) {

            // Dapatkan API Key dari header Authorization (atau X-API-KEY)

            $api_key = $request->get_header( 'X-API-KEY' ); // Atau ganti dengan $request->get_header( 'Authorization' ); dan parsing bearer token



            // === CATATAN PENTING: Definisikan IMPACT_INSTITUTE_API_KEY di wp-config.php ===

            // Pastikan ini adalah konstanta yang rahasia dan tidak di-commit ke Git.

            if ( defined( 'IMPACT_INSTITUTE_API_KEY' ) && IMPACT_INSTITUTE_API_KEY === $api_key ) {

                return true; // API Key valid

            }

            return new WP_Error( 'rest_forbidden', 'API Key tidak valid.', array( 'status' => 401 ) );

        },

        'args' => [ // Mendefinisikan argumen yang diharapkan

            'namaLengkap' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'email' => [ 'required' => true, 'validate_callback' => 'is_email', 'sanitize_callback' => 'sanitize_email' ],

            'luasLahan' => [ 'required' => true, 'type' => 'number', 'sanitize_callback' => 'intval' ],

            'provinsi' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'kabupatenKota' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'kecamatan' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'jenisLahan' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'komoditas' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'pengalamanBertani' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'sumberAir' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'penggunaanPupukPestisida' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'keteranganTambahan' => [ 'required' => false, 'sanitize_callback' => 'sanitize_textarea_field' ],

            'pernyataanKesediaan' => [ 'required' => true, 'sanitize_callback' => 'wp_validate_boolean' ], // Untuk checkbox

            // 'foto_lahan' dan 'pernyataan_kesediaan' (file) ditangani terpisah via $_FILES

            'noTelp' => [ 'required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],

            'whatsappNumber' => [ 'required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],

        ]

    ));

});





// =====================================================================

// 5. Endpoint REST API Kustom untuk Formulir Pendaftaran Carbon Buyer

//    Menerima data dari React (misal ForCarbonBuyers.jsx) dan menyimpan ke CPT.

// =====================================================================

function handle_carbon_buyer_registration_submission( $request ) {

    $params = $request->get_params();



    // Validasi dasar

    if ( empty( $params['companyName'] ) || empty( $params['emailBuyer'] ) || empty( $params['message'] ) ) {

        return new WP_Error( 'missing_fields', 'Mohon lengkapi semua bidang yang diperlukan.', array( 'status' => 400 ) );

    }



    // Buat postingan baru di CPT 'carbon_buyer'

    $post_title = 'Pendaftaran Buyer: ' . sanitize_text_field($params['companyName']);

    $post_content = '';

    foreach ($params as $key => $value) {

        if (is_array($value)) {

            $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(implode(', ', array_map('sanitize_text_field', $value))) . '<br>';

        } else {

            $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(sanitize_text_field($value)) . '<br>';

        }

    }



    $post_data = array(

        'post_title'    => $post_title,

        'post_content'  => $post_content,

        'post_status'   => 'pending', // Atau 'publish'

        'post_type'     => 'carbon_buyer',

    );



    $post_id = wp_insert_post( $post_data, true );



    if ( is_wp_error( $post_id ) ) {

        return new WP_Error( 'post_creation_failed', 'Gagal menyimpan pendaftaran buyer.', array( 'status' => 500, 'details' => $post_id->get_error_message() ) );

    }



    // --- Kirim email notifikasi ke buyer@impactinstitute.asia ---

    $to = 'buyer@impactinstitute.asia'; // Alamat email tujuan

    $subject = 'Pendaftaran Carbon Buyer Baru: ' . sanitize_text_field($params['companyName']);

    $body = "Detail Pendaftaran Carbon Buyer Baru:\n\n";

    $body .= "Nama Perusahaan: " . sanitize_text_field($params['companyName']) . "\n";

    $body .= "Nama Kontak: " . sanitize_text_field($params['contactPerson']) . "\n";

    $body .= "Email: " . sanitize_email($params['emailBuyer']) . "\n";

    $body .= "Nomor Telepon: " . sanitize_text_field($params['phoneBuyer']) . "\n";

    $body .= "Pesan: " . sanitize_textarea_field($params['message']) . "\n"; // Pesan dari form buyer



    $headers = array('Content-Type: text/plain; charset=UTF-8');

    // === CATATAN PENTING: Untuk pengiriman email yang andal, instal plugin SMTP ===

    // Contoh: WP Mail SMTP. Ganti dengan email pengirim yang valid di layanan SMTP Anda.

    $headers[] = 'From: Website Impact Institute <noreply@impactinstitute.asia>';

    $headers[] = 'Reply-To: ' . sanitize_email($params['emailBuyer']);



    $mail_sent = wp_mail( $to, $subject, $body, $headers );



    if ( $mail_sent ) {

        return new WP_REST_Response( array( 'message' => 'Pendaftaran buyer berhasil disimpan dan email notifikasi dikirim.', 'post_id' => $post_id ), 200 );

    } else {

        return new WP_Error( 'email_failed', 'Gagal mengirim email notifikasi.', array( 'status' => 500 ) );

    }

}



add_action( 'rest_api_init', function () {

    register_rest_route( 'custom/v1', '/submit-buyer-registration', array(

        'methods'                   => 'POST',

        'callback'                  => 'handle_carbon_buyer_registration_submission',

        'permission_callback'       => function( $request ) {

            $api_key = $request->get_header( 'X-API-KEY' );

            // === CATATAN PENTING: Definisikan IMPACT_INSTITUTE_API_KEY di wp-config.php ===

            if ( defined( 'IMPACT_INSTITUTE_API_KEY' ) && IMPACT_INSTITUTE_API_KEY === $api_key ) {

                return true;

            }

            return new WP_Error( 'rest_forbidden', 'API Key tidak valid.', array( 'status' => 401 ) );

        },

        'args' => [ // Mendefinisikan argumen yang diharapkan

            'companyName' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'contactPerson' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],

            'emailBuyer' => [ 'required' => true, 'validate_callback' => 'is_email', 'sanitize_callback' => 'sanitize_email' ],

            'phoneBuyer' => [ 'required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],

            'message' => [ 'required' => true, 'sanitize_callback' => 'sanitize_textarea_field' ],

        ]

    ));

});





// =====================================================================

// 6. Mengatur Featured Image untuk REST API Posts & Pages

//    Memastikan featured image URL tersedia di endpoint /wp/v2/posts dan /wp/v2/pages

//    untuk penggunaan di frontend React (Berita & Edukasi)

// =====================================================================

function add_featured_image_url_to_rest_response() {

    // Untuk Post

    register_rest_field( 'post',

        'featured_image_url',

        array(

            'get_callback'    => function( $object, $field_name, $request ) {

                $image_id = get_post_thumbnail_id( $object['id'] );

                return $image_id ? wp_get_attachment_url( $image_id ) : null;

            },

            'update_callback' => null,

            'schema'          => null,

        )

    );

    // Untuk Page

    register_rest_field( 'page',

        'featured_image_url',

        array(

            'get_callback'    => function( $object, $field_name, $request ) {

                $image_id = get_post_thumbnail_id( $object['id'] );

                return $image_id ? wp_get_attachment_url( $image_id ) : null;

            },

            'update_callback' => null,

            'schema'          => null,

        )

    );

}

add_action( 'rest_api_init', 'add_featured_image_url_to_rest_response' );





// =====================================================================

// 7. Modifikasi Menu Admin WordPress

//    Menghapus item menu yang tidak relevan.

// =====================================================================

function custom_remove_admin_menus() {

    // Contoh penghapusan menu standar yang mungkin tidak dibutuhkan

    // remove_menu_page( 'edit.php' );         // Posts

    // remove_menu_page( 'upload.php' );        // Media

    // remove_menu_page( 'edit.php?post_type=page' );  // Pages

    remove_menu_page( 'edit-comments.php' );       // Comments (biasanya tidak digunakan di headless WP)

    // remove_menu_page( 'themes.php' );        // Appearance

    // remove_menu_page( 'plugins.php' );        // Plugins

    // remove_menu_page( 'users.php' );         // Users

    // remove_menu_page( 'tools.php' );         // Tools

    // remove_menu_page( 'options-general.php' );    // Settings



    // Hapus menu yang mungkin dari plugin marketplace/e-commerce

    remove_menu_page( 'woocommerce' );           // WooCommerce main menu

    remove_menu_page( 'edit.php?post_type=product' ); // Products CPT menu

    remove_menu_page( 'edit.php?post_type=shop_order' ); // Orders CPT menu (WooCommerce)



    // Anda bisa menambahkan penghapusan menu lain jika diperlukan.

    // Untuk menemukan slug menu yang ingin dihapus, navigasikan ke halaman tersebut di admin WordPress,

    // lalu lihat URL-nya. Contoh: "edit.php?post_type=namacustomposttype".

}

add_action( 'admin_menu', 'custom_remove_admin_menus' );



// =====================================================================

// 8. Hapus widget dashboard yang tidak relevan

// =====================================================================

function custom_remove_dashboard_widgets() {

    global $wp_meta_boxes;



    // Menghapus widget standar yang jarang digunakan di headless setup

    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);     // Activity

    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);    // Recent Comments

    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);         // WordPress Events and News

    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);      // Quick Draft

    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);      // At a Glance

    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);    // Incoming Links (deprecated)

    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);        // Plugins (sometimes added by plugins)



    // Menghapus widget yang mungkin dari plugin marketplace/e-commerce

    unset($wp_meta_boxes['dashboard']['normal']['core']['woocommerce_dashboard_status']); // WooCommerce Status

    unset($wp_meta_boxes['dashboard']['normal']['core']['woocommerce_dashboard_recent_orders']); // WooCommerce Recent Orders



    // Tambahkan baris di sini untuk menghapus widget lain yang tidak Anda inginkan.

    // Anda bisa menggunakan plugin seperti "Screen Options" atau menginspeksi elemen

    // untuk menemukan ID widget yang ingin dihapus.

}

add_action( 'wp_dashboard_setup', 'custom_remove_dashboard_widgets' );



dengan file function.php existing berikut:



<?php

/**

 * Tema Functions

 *

 * Ini adalah file functions.php untuk tema WordPress Anda.

 * Digunakan untuk menambahkan fungsionalitas kustom, termasuk

 * REST API endpoints untuk integrasi dengan frontend React.

 */



// Exit if accessed directly

if ( !defined( 'ABSPATH' ) ) exit;



// BEGIN ENQUEUE PARENT ACTION

// AUTO GENERATED - Do not modify or remove comment markers above or below:



if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):

    function chld_thm_cfg_locale_css( $uri ){

        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )

            $uri = get_template_directory_uri() . '/rtl.css';

        return $uri;

    }

endif;

add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );



// END ENQUEUE PARENT ACTION





// =====================================================================

// 1. Pengaturan CORS (Cross-O



Berdasarkan perbandingan kedua file, file yang Anda berikan (file baru) sudah mengandung semua fungsionalitas dari file functions.php yang sudah ada dan menambahkan fungsionalitas baru yang signifikan.

Oleh karena itu, Anda harus mengintegrasikan file ini dengan menimpa (overwrite) file functions.php yang sudah ada dengan isi dari file yang Anda berikan.

Mengapa Anda harus mengintegrasikan file ini?
File baru Anda berisi:

Pengaturan CORS (Cross-Origin Resource Sharing) yang sudah diperbarui. Ini penting untuk memungkinkan frontend React Anda di Netlify berinteraksi dengan API WordPress Anda. Bagian ini secara spesifik mencantumkan https://impactinstitute.asia sebagai allowed origin.

Registrasi Custom Post Type (CPT) untuk "Pendaftaran Lahan Petani" (farmer_registration). Ini akan membuat jenis postingan baru di WordPress untuk mengelola data pendaftaran petani.

Registrasi Custom Post Type (CPT) untuk "Data Carbon Buyer" (carbon_buyer). Ini akan membuat jenis postingan baru di WordPress untuk mengelola data pembeli karbon.

Endpoint REST API Kustom (/submit-farmer-registration) untuk menerima data formulir pendaftaran petani dari frontend React, menyimpannya ke CPT, dan juga menangani unggahan file serta mengirim notifikasi email.

Endpoint REST API Kustom (/submit-buyer-registration) untuk menerima data formulir pendaftaran pembeli karbon dari frontend React, menyimpannya ke CPT, dan mengirim notifikasi email.

Penambahan URL Featured Image ke REST API untuk Post dan Page, yang sangat berguna jika frontend React Anda menampilkan berita atau halaman dari WordPress.

Modifikasi Menu Admin WordPress untuk menghapus beberapa item menu yang tidak relevan di setup headless WordPress (misalnya Komentar, WooCommerce).

Penghapusan Widget Dashboard yang tidak relevan, yang juga membantu membersihkan tampilan admin untuk setup headless.

Semua penambahan ini adalah fitur penting yang diperlukan untuk fungsionalitas yang Anda jelaskan (integrasi React, formulir pendaftaran, dll.). Karena file baru sudah menyertakan baris "BEGIN ENQUEUE PARENT ACTION" dan "END ENQUEUE PARENT ACTION" yang sama persis dengan file lama Anda, itu berarti file baru ini juga mempertahankan fungsionalitas tema induk (jika tema Anda adalah tema anak).

Langkah-langkah untuk Mengintegrasikan
Backup File functions.php yang Ada: Ini adalah langkah paling penting. Sebelum melakukan perubahan apa pun, salin dan simpan file functions.php Anda yang ada ke lokasi lain (misalnya, di komputer lokal Anda dengan nama functions_old.php). Ini akan memungkinkan Anda untuk mengembalikan jika terjadi masalah.

Timpa (Overwrite) File: Unggah file PHP yang baru Anda berikan ke direktori tema aktif WordPress Anda, menimpa file functions.php yang sudah ada.

Tambahkan IMPACT_INSTITUTE_API_KEY: Seperti yang disebutkan dalam komentar di file, Anda HARUS menambahkan API Key ini ke file wp-config.php Anda. Ini adalah kunci rahasia untuk otentikasi API kustom Anda.

Buka file wp-config.php (biasanya berada di direktori root instalasi WordPress Anda).

Tambahkan baris berikut di tempat yang aman, idealnya di atas baris /* That's all, stop editing! Happy publishing. */

PHP

define('IMPACT_INSTITUTE_API_KEY', 'KunciRahasiaAndaDiSini'); // Ganti dengan kunci yang kuat dan unik
Pastikan KunciRahasiaAndaDiSini adalah string yang panjang, acak, dan sulit ditebak. Jangan gunakan kunci ini di repositori Git publik Anda.

Instal dan Konfigurasi Plugin SMTP (Sangat Disarankan): Untuk memastikan email notifikasi terkirim dengan andal, seperti yang disarankan dalam komentar, instal plugin SMTP seperti WP Mail SMTP. Konfigurasikan dengan kredensial penyedia email Anda. Ini akan mencegah email Anda ditandai sebagai spam atau gagal terkirim.

Instal dan Konfigurasi Advanced Custom Fields (ACF) (Sangat Disarankan): Komentar di bagian penanganan unggahan file menyarankan penggunaan ACF untuk pengelolaan file yang lebih baik. Jika Anda berencana untuk mengelola bidang-bidang formulir ini di backend WordPress dengan mudah, instal plugin ACF, buat grup bidang untuk CPT "Pendaftaran Petani" dan "Carbon Buyer", lalu atur bidang untuk file unggahan (misalnya, jenis bidang "File" atau "Galeri"). Setelah itu, Anda perlu menyesuaikan bagian handle_farmer_registration_form_submission yang berhubungan dengan update_post_meta menjadi update_field() jika Anda menggunakan ACF untuk menyimpan ID attachment.

Uji Menyeluruh: Setelah integrasi, uji semua fungsionalitas yang terpengaruh:

Coba kirim formulir pendaftaran petani dari frontend React Anda. Periksa apakah data muncul di admin WordPress di bawah "Pendaftaran Petani" dan apakah email notifikasi terkirim.

Coba kirim formulir pendaftaran pembeli karbon dari frontend React Anda. Periksa apakah data muncul di admin WordPress di bawah "Data Carbon Buyer" dan apakah email notifikasi terkirim.

Pastikan REST API untuk post dan page mengembalikan URL featured image dengan benar.

Periksa menu admin dan dashboard untuk memastikan item yang tidak relevan telah dihapus.

Dengan mengikuti langkah-langkah ini, Anda akan berhasil mengintegrasikan fungsionalitas baru yang diperlukan untuk sistem WordPress headless Anda dengan React.






baiklah kalau begitu bantu aku mengintegrasikan secara lengkap


Tentu, mari kita integrasikan file functions.php Anda secara lengkap. Berdasarkan file yang Anda berikan, Anda akan mengganti file functions.php yang ada di tema WordPress Anda dengan kode baru ini.

Langkah-Langkah Integrasi Lengkap
Ikuti langkah-langkah di bawah ini dengan hati-hati. Sangat penting untuk melakukan pencadangan (backup) sebelum membuat perubahan apa pun.

Langkah 1: Backup File functions.php Anda yang Ada
Akses file instalasi WordPress Anda melalui FTP/SFTP atau File Manager dari panel kontrol hosting Anda (cPanel, Plesk, dll.).

Navigasi ke direktori tema aktif Anda. Biasanya lokasinya adalah /wp-content/themes/nama-tema-anda/.

Cari file bernama functions.php.

Unduh file functions.php ini ke komputer lokal Anda. Beri nama misalnya functions_OLD_backup.php agar Anda tahu ini adalah versi cadangan. Ini adalah langkah krusial untuk berjaga-jaga jika ada masalah.

Langkah 2: Siapkan File functions.php Baru Anda
Buka file teks editor (seperti VS Code, Sublime Text, Notepad++, dll.) dan salin seluruh kode yang Anda berikan di awal percakapan ini ke dalamnya.

Simpan file ini dengan nama functions.php.

Langkah 3: Unggah File functions.php Baru ke Server
Kembali ke direktori tema aktif Anda di server (/wp-content/themes/nama-tema-anda/).

Unggah file functions.php yang baru Anda siapkan. Server akan meminta Anda untuk menimpa file yang ada. Konfirmasi untuk menimpa file tersebut.

Langkah 4: Tambahkan IMPACT_INSTITUTE_API_KEY ke wp-config.php
API Key ini digunakan untuk mengamankan endpoint REST API kustom Anda, memastikan hanya frontend React Anda yang dapat mengirim data.

Navigasi ke direktori root instalasi WordPress Anda (satu level di atas /wp-content/).

Cari file bernama wp-config.php.

Unduh wp-config.php ke komputer lokal Anda dan buka dengan teks editor.

Cari baris yang terlihat seperti ini:

PHP

/* That's all, stop editing! Happy publishing. */
Tambahkan baris kode berikut ini TEPAT DI ATAS baris /* That's all, stop editing! Happy publishing. */:

PHP

/**
 * Kunci API Kustom untuk Integrasi Frontend React.
 * Pastikan ini tetap rahasia.
 */
define('IMPACT_INSTITUTE_API_KEY', 'GENERATE_YOUR_OWN_STRONG_RANDOM_KEY_HERE');
Ganti GENERATE_YOUR_OWN_STRONG_RANDOM_KEY_HERE dengan string yang benar-benar kuat, unik, dan acak. Contohnya, Anda bisa menggunakan generator kata sandi online atau kombinasi karakter acak yang panjang (misalnya, aP9s@2dLqT#vJkRmN6xGz7yFhBcCbE4u). Jangan gunakan contoh di atas langsung.

Simpan file wp-config.php yang sudah diubah.

Unggah kembali wp-config.php ke direktori root instalasi WordPress Anda, menimpa file yang ada di server.

Rekomendasi Tambahan (Sangat Disarankan)
1. Instal dan Konfigurasi Plugin SMTP
Kode Anda menggunakan fungsi wp_mail() untuk mengirim email notifikasi. Tanpa konfigurasi SMTP yang tepat, email ini seringkali bisa masuk ke folder spam atau gagal terkirim sama sekali.

Instal plugin: Pergi ke Dashboard WordPress Anda, navigasi ke Plugins > Add New, lalu cari dan instal "WP Mail SMTP" (atau plugin SMTP terkemuka lainnya).

Konfigurasi: Ikuti panduan konfigurasi plugin untuk menghubungkannya dengan penyedia layanan email eksternal (misalnya, SendGrid, Mailgun, Brevo/Sendinblue, Gmail SMTP, dll.). Pastikan email pengirim (From: header) yang Anda setel di plugin cocok dengan domain Anda (misalnya, noreply@impactinstitute.asia).

2. Instal dan Konfigurasi Advanced Custom Fields (ACF)
Ini akan sangat memudahkan pengelolaan data formulir yang masuk, terutama untuk unggahan file.

Instal plugin: Pergi ke Dashboard WordPress Anda, navigasi ke Plugins > Add New, lalu cari dan instal "Advanced Custom Fields" (versi gratis sudah cukup).

Buat Field Group:

Setelah instalasi, di Dashboard WordPress, navigasi ke ACF > Field Groups.

Buat Field Group baru (misalnya, "Data Pendaftaran Petani").

Tambahkan field untuk setiap data yang Anda kumpulkan dari formulir petani (misalnya, namaLengkap (Text), email (Email), luasLahan (Number), provinsi (Text), dll.).

Untuk foto_lahan, gunakan tipe field "Gallery" atau "File" (jika hanya satu file).

Untuk pernyataan_kesediaan, gunakan tipe field "True/False" (untuk checkbox).

Atur Location Rules agar Field Group ini muncul untuk Post Type is equal to Pendaftaran Petani.

Ulangi proses ini untuk Field Group "Data Carbon Buyer".

Modifikasi Kode (Opsional tapi Direkomendasikan): Jika Anda menggunakan ACF untuk field file, Anda bisa menyederhanakan bagian penanganan file di handle_farmer_registration_form_submission dengan menggunakan fungsi ACF seperti update_field(). Contoh:

PHP

// Setelah $attachment_id dibuat
// if ($file_field_name === 'foto_lahan') {
//     update_field('nama_field_acf_foto_lahan', $attachment_id, $post_id);
// } elseif ($file_field_name === 'pernyataan_kesediaan') {
//     update_field('nama_field_acf_pernyataan_kesediaan', $attachment_id, $post_id);
// }
// Ini adalah contoh, sesuaikan dengan nama field ACF Anda
Catatan: Tanpa modifikasi ini, file Anda akan tetap terunggah ke Media Library dan ID-nya disimpan di post meta, tetapi integrasi visual di admin mungkin tidak seoptimal jika Anda menggunakan field ACF khusus.

Pengujian
Setelah semua langkah di atas selesai, Anda perlu melakukan pengujian menyeluruh:

Akses Dashboard WordPress: Pastikan Anda masih bisa masuk ke admin WordPress Anda.

Periksa Menu Admin: Lihat apakah menu "Pendaftaran Petani" dan "Data Carbon Buyer" sudah muncul. Juga, pastikan menu atau widget yang tidak relevan telah hilang.

Uji Formulir Frontend React:

Kirim formulir pendaftaran petani dari frontend React Anda.

Periksa di Dashboard WordPress Anda di bawah "Pendaftaran Petani" apakah entri baru muncul dan semua data (termasuk unggahan file) tersimpan dengan benar.

Periksa inbox email buyer@impactinstitute.asia apakah notifikasi email telah diterima.

Ulangi proses yang sama untuk formulir pendaftaran pembeli karbon.

Uji API Featured Image: Coba akses endpoint REST API untuk posts dan pages dari browser atau Postman (misalnya, yourwordpressdomain.com/wp-json/wp/v2/posts). Pastikan ada properti featured_image_url dengan URL gambar yang benar.

Jika ada masalah, periksa log error PHP server Anda. Semoga berhasil!







mana file update lengkapnya?


Tentu, ini adalah konten lengkap dari file functions.php yang telah diperbarui dan siap untuk Anda gunakan. Anda dapat menyalin seluruh kode di bawah ini dan menimpanya ke file functions.php yang ada di direktori tema WordPress Anda, setelah Anda melakukan backup file lama Anda.

PHP

<?php
/**
 * Tema Functions
 *
 * Ini adalah file functions.php untuk tema WordPress Anda.
 * Digunakan untuk menambahkan fungsionalitas kustom, termasuk
 * REST API endpoints untuk integrasi dengan frontend React.
 */

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

// END ENQUEUE PARENT ACTION


// =====================================================================
// 1. Pengaturan CORS (Cross-Origin Resource Sharing)
//    Penting agar frontend React di Netlify dapat mengakses API WordPress.
// =====================================================================
function add_cors_http_header() {
    // === UPDATE: Definisikan domain frontend React Anda di sini ===
    // Pastikan ini sesuai dengan domain yang akan mengakses API Anda.
    // Tambahkan domain lain jika diperlukan (misal: staging, localhost untuk dev).
    $allowed_origins = array(
        'https://impactinstitute.asia',       // Domain produksi situs React Anda
        // 'http://localhost:3000',            // Untuk pengembangan lokal React
        // 'https://staging.impactinstitute.asia', // Jika ada domain staging
    );

    $origin = get_http_origin(); // Mengambil Origin dari header request

    if ( in_array( $origin, $allowed_origins ) ) {
        header( "Access-Control-Allow-Origin: " . $origin );
    } else {
        // Jika origin tidak diizinkan, jangan kirim header Access-Control-Allow-Origin
        // Ini akan menyebabkan browser memblokir permintaan, yang merupakan perilaku aman.
        // Anda bisa menambahkan log di sini jika ingin melacak upaya akses yang tidak sah.
    }

    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    // === UPDATE: Tambahkan 'X-API-KEY' ke Access-Control-Allow-Headers ===
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-API-KEY");
    header("Access-Control-Allow-Credentials: true"); // Penting jika Anda akan menggunakan cookie/otentikasi sesi
    header("Access-Control-Max-Age: 600"); // Cache preflight OPTIONS requests selama 10 menit

    // Untuk preflight OPTIONS request
    if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
        status_header( 200 );
        exit();
    }
}
add_action( 'init', 'add_cors_http_header' );


// =====================================================================
// 2. Registrasi Custom Post Type untuk Pendaftaran Lahan Petani
//    Ini akan membuat jenis postingan baru di WordPress untuk menyimpan data formulir petani.
// =====================================================================
function register_farmer_registration_cpt() {
    $labels = array(
        'name'                => _x( 'Pendaftaran Petani', 'Post Type General Name', 'impact-institute' ),
        'singular_name'       => _x( 'Pendaftaran Petani', 'Post Type Singular Name', 'impact-institute' ),
        'menu_name'           => __( 'Pendaftaran Petani', 'impact-institute' ),
        'name_admin_bar'      => __( 'Pendaftaran Petani', 'impact-institute' ),
        'archives'            => __( 'Arsip Pendaftaran Petani', 'impact-institute' ),
        'attributes'          => __( 'Atribut Pendaftaran Petani', 'impact-institute' ),
        'parent_item_colon'   => __( 'Item Induk:', 'impact-institute' ),
        'all_items'           => __( 'Semua Pendaftaran', 'impact-institute' ),
        'add_new_item'        => __( 'Tambah Pendaftaran Baru', 'impact-institute' ),
        'add_new'             => __( 'Tambah Baru', 'impact-institute' ),
        'new_item'            => __( 'Pendaftaran Baru', 'impact-institute' ),
        'edit_item'           => __( 'Edit Pendaftaran', 'impact-institute' ),
        'update_item'         => __( 'Perbarui Pendaftaran', 'impact-institute' ),
        'view_item'           => __( 'Lihat Pendaftaran', 'impact-institute' ),
        'view_items'          => __( 'Lihat Pendaftaran', 'impact-institute' ),
        'search_items'        => __( 'Cari Pendaftaran', 'impact-institute' ),
        'not_found'           => __( 'Tidak Ditemukan', 'impact-institute' ),
        'not_found_in_trash'  => __( 'Tidak Ditemukan di Sampah', 'impact-institute' ),
        'featured_image'      => __( 'Gambar Unggulan', 'impact-institute' ),
        'set_featured_image'  => __( 'Atur Gambar Unggulan', 'impact-institute' ),
        'remove_featured_image' => __( 'Hapus Gambar Unggulan', 'impact-institute' ),
        'use_featured_image'  => __( 'Gunakan sebagai Gambar Unggulan', 'impact-institute' ),
        'insert_into_item'    => __( 'Sisipkan ke item', 'impact-institute' ),
        'uploaded_to_this_item' => __( 'Diunggah ke item ini', 'impact-institute' ),
        'items_list'          => __( 'Daftar Pendaftaran', 'impact-institute' ),
        'items_list_navigation' => __( 'Navigasi Daftar Pendaftaran', 'impact-institute' ),
        'filter_items_list'   => __( 'Filter daftar pendaftaran', 'impact-institute' ),
    );
    $args = array(
        'label'               => __( 'Pendaftaran Petani', 'impact-institute' ),
        'description'         => __( 'Formulir pendaftaran lahan dari petani', 'impact-institute' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields' ), // 'editor' untuk konten formulir, 'custom-fields' untuk ACF
        'hierarchical'        => false,
        'public'              => false, // Tidak ditampilkan di frontend publik
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-groups',
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => true,
        'publicly_queryable'  => false,
        'capability_type'     => 'post',
        'show_in_rest'        => true, // Penting untuk REST API
        'rest_base'           => 'farmer-registrations', // Endpoint API: wp-json/wp/v2/farmer-registrations
    );
    register_post_type( 'farmer_registration', $args );
}
add_action( 'init', 'register_farmer_registration_cpt', 0 );


// =====================================================================
// 3. Registrasi Custom Post Type untuk Data Carbon Buyer
//    Ini akan membuat jenis postingan baru di WordPress untuk menyimpan data formulir pembeli karbon.
// =====================================================================
function register_carbon_buyer_cpt() {
    $labels = array(
        'name'                => _x( 'Data Carbon Buyer', 'Post Type General Name', 'impact-institute' ),
        'singular_name'       => _x( 'Data Carbon Buyer', 'Post Type Singular Name', 'impact-institute' ),
        'menu_name'           => __( 'Data Carbon Buyer', 'impact-institute' ),
        'name_admin_bar'      => __( 'Carbon Buyer', 'impact-institute' ),
        'all_items'           => __( 'Semua Carbon Buyer', 'impact-institute' ),
        'add_new_item'        => __( 'Tambah Data Buyer Baru', 'impact-institute' ),
        'add_new'             => __( 'Tambah Baru', 'impact-institute' ),
        'new_item'            => __( 'Data Buyer Baru', 'impact-institute' ),
        'edit_item'           => __( 'Edit Data Buyer', 'impact-institute' ),
        'update_item'         => __( 'Perbarui Data Buyer', 'impact-institute' ),
        'view_item'           => __( 'Lihat Data Buyer', 'impact-institute' ),
        'search_items'        => __( 'Cari Data Buyer', 'impact-institute' ),
        'not_found'           => __( 'Tidak Ditemukan', 'impact-institute' ),
        'not_found_in_trash'  => __( 'Tidak Ditemukan di Sampah', 'impact-institute' ),
    );
    $args = array(
        'label'               => __( 'Carbon Buyer', 'impact-institute' ),
        'description'         => __( 'Data pendaftaran atau kontak dari pembeli karbon', 'impact-institute' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'custom-fields' ), // 'editor' untuk konten formulir, 'custom-fields' untuk ACF
        'hierarchical'        => false,
        'public'              => false, // Tidak ditampilkan di frontend publik
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 6, // Di bawah Pendaftaran Petani
        'menu_icon'           => 'dashicons-chart-area', // Ikon yang sesuai
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => true,
        'publicly_queryable'  => false,
        'capability_type'     => 'post',
        'show_in_rest'        => true, // Penting untuk REST API
        'rest_base'           => 'carbon-buyers', // Endpoint API: wp-json/wp/v2/carbon-buyers
    );
    register_post_type( 'carbon_buyer', $args );
}
add_action( 'init', 'register_carbon_buyer_cpt', 0 );


// =====================================================================
// 4. Endpoint REST API Kustom untuk Formulir Pendaftaran Lahan Petani
//    Menerima data dari React (misal ForFarmers.jsx) dan menyimpan ke CPT.
// =====================================================================
function handle_farmer_registration_form_submission( $request ) {
    $params = $request->get_params(); // get_params() cocok untuk application/x-www-form-urlencoded atau multipart/form-data

    // Validasi dasar (Anda bisa menambahkan validasi yang lebih ketat)
    if ( empty( $params['namaLengkap'] ) || empty( $params['email'] ) || empty( $params['luasLahan'] ) ) {
        return new WP_Error( 'missing_fields', 'Mohon lengkapi semua bidang yang diperlukan.', array( 'status' => 400 ) );
    }

    // Buat postingan baru di CPT 'farmer_registration'
    $post_title = 'Pendaftaran Lahan: ' . sanitize_text_field($params['namaLengkap']) . ' - ' . sanitize_text_field($params['provinsi']);
    $post_content = '';
    // Memasukkan semua parameter form ke post_content agar mudah dilihat di admin
    foreach ($params as $key => $value) {
        // Hindari menambahkan file ke konten post utama, akan ditangani terpisah
        if (strpos($key, 'foto_lahan') === false && $key !== 'pernyataan_kesediaan') {
            if (is_array($value)) {
                $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(implode(', ', array_map('sanitize_text_field', $value))) . '<br>';
            } else {
                $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(sanitize_text_field($value)) . '<br>';
            }
        }
    }

    $post_data = array(
        'post_title'    => $post_title,
        'post_content'  => $post_content,
        'post_status'   => 'pending', // Atau 'publish' jika Anda ingin langsung menerbitkan
        'post_type'     => 'farmer_registration',
    );

    $post_id = wp_insert_post( $post_data, true );

    if ( is_wp_error( $post_id ) ) {
        return new WP_Error( 'post_creation_failed', 'Gagal menyimpan pendaftaran.', array( 'status' => 500, 'details' => $post_id->get_error_message() ) );
    }

    // --- Tangani Unggahan File (foto_lahan dan pernyataan_kesediaan) ---
    // === REKOMENDASI KUAT: Gunakan plugin Advanced Custom Fields (ACF) ===
    // Untuk mengelola bidang "File" atau "Gallery" pada CPT "Pendaftaran Petani".
    // Ini akan membuat pengelolaan file di admin lebih mudah dan terintegrasi.
    // Jika menggunakan ACF, Anda akan memanggil update_field() setelah wp_insert_attachment.

    $uploaded_files_info = [];
    $files_to_handle = ['foto_lahan', 'pernyataan_kesediaan']; // Field nama file dari form

    // --- UPDATE: Memastikan fungsi media tersedia sebelum digunakan ---
    require_once( ABSPATH . 'wp-admin/includes/image.php' );
    require_once( ABSPATH . 'wp-admin/includes/file.php' );
    require_once( ABSPATH . 'wp-admin/includes/media.php' );

    foreach ($files_to_handle as $file_field_name) {
        if ( ! empty( $_FILES[$file_field_name] ) ) {
            $files_array = $_FILES[$file_field_name];

            // If it's a single file upload, make it an array for consistent processing
            if (!is_array($files_array['name'])) {
                $files_array['name'] = [$files_array['name']];
                $files_array['type'] = [$files_array['type']];
                $files_array['tmp_name'] = [$files_array['tmp_name']];
                $files_array['error'] = [$files_array['error']];
                $files_array['size'] = [$files_array['size']];
            }

            $file_count = count($files_array['name']);

            for ($i = 0; $i < $file_count; $i++) {
                if ($files_array['error'][$i] === UPLOAD_ERR_OK) {
                    $file_item = array(
                        'name'     => $files_array['name'][$i],
                        'type'     => $files_array['type'][$i],
                        'tmp_name' => $files_array['tmp_name'][$i],
                        'error'    => $files_array['error'][$i],
                        'size'     => $files_array['size'][$i],
                    );

                    // === UPDATE: Validasi tipe file dan ukuran (contoh) ===
                    $allowed_mimes = array(
                        'jpg|jpeg|jpe' => 'image/jpeg',
                        'png'          => 'image/png',
                        'pdf'          => 'application/pdf',
                        // Tambahkan tipe file lain yang diizinkan di sini
                    );
                    $file_info = wp_check_filetype( $file_item['name'], $allowed_mimes );

                    // Batas ukuran file (contoh: 5MB)
                    $max_file_size = 5 * 1024 * 1024; // 5 MB in bytes

                    if ( ! $file_info['ext'] ) {
                        error_log( 'Disallowed file type attempted for ' . $file_field_name . ': ' . $file_item['name'] );
                        // Tidak menghentikan proses jika ada file lain yang valid, hanya melog error
                        continue; // Lewati file yang tidak valid ini
                    }
                    if ( $file_item['size'] > $max_file_size ) {
                        error_log( 'File size too large for ' . $file_field_name . ': ' . $file_item['name'] );
                        continue; // Lewati file yang terlalu besar ini
                    }

                    $upload_overrides = array( 'test_form' => false );
                    $movefile = wp_handle_upload( $file_item, $upload_overrides );

                    if ( $movefile && ! isset( $movefile['error'] ) ) {
                        $attachment = array(
                            'guid'           => $movefile['url'],
                            'post_mime_type' => $movefile['type'],
                            'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $movefile['file'] ) ),
                            'post_content'   => '',
                            'post_status'    => 'inherit'
                        );

                        $attachment_id = wp_insert_attachment( $attachment, $movefile['file'], $post_id );
                        wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $movefile['file'] ) );

                        // Simpan ID attachment ke post meta untuk memudahkan pengambilan atau tampilan di admin
                        // === CATATAN: Jika menggunakan ACF, ganti baris ini dengan update_field() ===
                        $uploaded_files_info[$file_field_name][] = $attachment_id;
                    } else {
                        error_log( 'Error uploading file (' . $file_field_name . '): ' . (isset($movefile['error']) ? $movefile['error'] : 'Unknown error') );
                    }
                } else {
                    error_log( 'File upload error for ' . $file_field_name . ': ' . $files_array['error'][$i] );
                }
            }
        }
    }

    // Simpan ID attachment yang diunggah ke post meta
    // === CATATAN: Jika menggunakan ACF, bagian ini mungkin tidak lagi dibutuhkan ===
    if ( ! empty( $uploaded_files_info ) ) {
        foreach ($uploaded_files_info as $field_name => $attachment_ids) {
            update_post_meta( $post_id, '_' . $field_name, $attachment_ids );
        }
    }

    // --- Kirim email notifikasi ke buyer@impactinstitute.asia ---
    $to = 'buyer@impactinstitute.asia'; // Ganti dengan alamat email penerima yang sebenarnya
    $subject = 'Pendaftaran Lahan Baru dari Petani: ' . sanitize_text_field($params['namaLengkap']);
    $body = "Detail Pendaftaran Lahan Baru:\n\n";
    foreach ($params as $key => $value) {
        if (is_array($value)) {
            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key))) . ": " . implode(', ', array_map('sanitize_text_field', $value)) . "\n";
        } else {
            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key))) . ": " . sanitize_text_field($value) . "\n";
        }
    }
    // Tambahkan info URL file yang terunggah ke email
    if (!empty($uploaded_files_info)) {
        $body .= "\nFile Terunggah:\n";
        foreach ($uploaded_files_info as $field_name => $attachment_ids) {
            $body .= ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $field_name))) . ":\n";
            foreach ($attachment_ids as $attachment_id) {
                $body .= wp_get_attachment_url($attachment_id) . "\n";
            }
        }
        $body .= "\n";
    }

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    // === CATATAN PENTING: Untuk pengiriman email yang andal, instal plugin SMTP ===
    // Contoh: WP Mail SMTP. Ganti dengan email pengirim yang valid di layanan SMTP Anda.
    $headers[] = 'From: Website Impact Institute <noreply@impactinstitute.asia>';
    $headers[] = 'Reply-To: ' . sanitize_email($params['email']);

    wp_mail( $to, $subject, $body, $headers );

    return new WP_REST_Response( array( 'message' => 'Pendaftaran berhasil disimpan dan email notifikasi dikirim.', 'post_id' => $post_id ), 200 );
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/submit-farmer-registration', array(
        'methods'             => 'POST',
        'callback'            => 'handle_farmer_registration_form_submission',
        'permission_callback' => function( $request ) {
            // Dapatkan API Key dari header Authorization (atau X-API-KEY)
            $api_key = $request->get_header( 'X-API-KEY' ); // Atau ganti dengan $request->get_header( 'Authorization' ); dan parsing bearer token

            // === CATATAN PENTING: Definisikan IMPACT_INSTITUTE_API_KEY di wp-config.php ===
            // Pastikan ini adalah konstanta yang rahasia dan tidak di-commit ke Git.
            if ( defined( 'IMPACT_INSTITUTE_API_KEY' ) && IMPACT_INSTITUTE_API_KEY === $api_key ) {
                return true; // API Key valid
            }
            return new WP_Error( 'rest_forbidden', 'API Key tidak valid.', array( 'status' => 401 ) );
        },
        'args' => [ // Mendefinisikan argumen yang diharapkan
            'namaLengkap' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'email' => [ 'required' => true, 'validate_callback' => 'is_email', 'sanitize_callback' => 'sanitize_email' ],
            'luasLahan' => [ 'required' => true, 'type' => 'number', 'sanitize_callback' => 'intval' ],
            'provinsi' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'kabupatenKota' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'kecamatan' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'jenisLahan' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'komoditas' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'pengalamanBertani' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'sumberAir' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'penggunaanPupukPestisida' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'keteranganTambahan' => [ 'required' => false, 'sanitize_callback' => 'sanitize_textarea_field' ],
            'pernyataanKesediaan' => [ 'required' => true, 'sanitize_callback' => 'wp_validate_boolean' ], // Untuk checkbox
            // 'foto_lahan' dan 'pernyataan_kesediaan' (file) ditangani terpisah via $_FILES
            'noTelp' => [ 'required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],
            'whatsappNumber' => [ 'required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],
        ]
    ));
});


// =====================================================================
// 5. Endpoint REST API Kustom untuk Formulir Pendaftaran Carbon Buyer
//    Menerima data dari React (misal ForCarbonBuyers.jsx) dan menyimpan ke CPT.
// =====================================================================
function handle_carbon_buyer_registration_submission( $request ) {
    $params = $request->get_params();

    // Validasi dasar
    if ( empty( $params['companyName'] ) || empty( $params['emailBuyer'] ) || empty( $params['message'] ) ) {
        return new WP_Error( 'missing_fields', 'Mohon lengkapi semua bidang yang diperlukan.', array( 'status' => 400 ) );
    }

    // Buat postingan baru di CPT 'carbon_buyer'
    $post_title = 'Pendaftaran Buyer: ' . sanitize_text_field($params['companyName']);
    $post_content = '';
    foreach ($params as $key => $value) {
        if (is_array($value)) {
            $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(implode(', ', array_map('sanitize_text_field', $value))) . '<br>';
        } else {
            $post_content .= '<strong>' . esc_html(ucwords(str_replace('_', ' ', preg_replace('/(?<!^)[A-Z]/', ' $0', $key)))) . ':</strong> ' . esc_html(sanitize_text_field($value)) . '<br>';
        }
    }

    $post_data = array(
        'post_title'    => $post_title,
        'post_content'  => $post_content,
        'post_status'   => 'pending', // Atau 'publish'
        'post_type'     => 'carbon_buyer',
    );

    $post_id = wp_insert_post( $post_data, true );

    if ( is_wp_error( $post_id ) ) {
        return new WP_Error( 'post_creation_failed', 'Gagal menyimpan pendaftaran buyer.', array( 'status' => 500, 'details' => $post_id->get_error_message() ) );
    }

    // --- Kirim email notifikasi ke buyer@impactinstitute.asia ---
    $to = 'buyer@impactinstitute.asia'; // Alamat email tujuan
    $subject = 'Pendaftaran Carbon Buyer Baru: ' . sanitize_text_field($params['companyName']);
    $body = "Detail Pendaftaran Carbon Buyer Baru:\n\n";
    $body .= "Nama Perusahaan: " . sanitize_text_field($params['companyName']) . "\n";
    $body .= "Nama Kontak: " . sanitize_text_field($params['contactPerson']) . "\n";
    $body .= "Email: " . sanitize_email($params['emailBuyer']) . "\n";
    $body .= "Nomor Telepon: " . sanitize_text_field($params['phoneBuyer']) . "\n";
    $body .= "Pesan: " . sanitize_textarea_field($params['message']) . "\n"; // Pesan dari form buyer

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    // === CATATAN PENTING: Untuk pengiriman email yang andal, instal plugin SMTP ===
    // Contoh: WP Mail SMTP. Ganti dengan email pengirim yang valid di layanan SMTP Anda.
    $headers[] = 'From: Website Impact Institute <noreply@impactinstitute.asia>';
    $headers[] = 'Reply-To: ' . sanitize_email($params['emailBuyer']);

    $mail_sent = wp_mail( $to, $subject, $body, $headers );

    if ( $mail_sent ) {
        return new WP_REST_Response( array( 'message' => 'Pendaftaran buyer berhasil disimpan dan email notifikasi dikirim.', 'post_id' => $post_id ), 200 );
    } else {
        return new WP_Error( 'email_failed', 'Gagal mengirim email notifikasi.', array( 'status' => 500 ) );
    }
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/submit-buyer-registration', array(
        'methods'             => 'POST',
        'callback'            => 'handle_carbon_buyer_registration_submission',
        'permission_callback' => function( $request ) {
            $api_key = $request->get_header( 'X-API-KEY' );
            // === CATATAN PENTING: Definisikan IMPACT_INSTITUTE_API_KEY di wp-config.php ===
            if ( defined( 'IMPACT_INSTITUTE_API_KEY' ) && IMPACT_INSTITUTE_API_KEY === $api_key ) {
                return true;
            }
            return new WP_Error( 'rest_forbidden', 'API Key tidak valid.', array( 'status' => 401 ) );
        },
        'args' => [ // Mendefinisikan argumen yang diharapkan
            'companyName' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'contactPerson' => [ 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ],
            'emailBuyer' => [ 'required' => true, 'validate_callback' => 'is_email', 'sanitize_callback' => 'sanitize_email' ],
            'phoneBuyer' => [ 'required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ],
            'message' => [ 'required' => true, 'sanitize_callback' => 'sanitize_textarea_field' ],
        ]
    ));
});


// =====================================================================
// 6. Mengatur Featured Image untuk REST API Posts & Pages
//    Memastikan featured image URL tersedia di endpoint /wp/v2/posts dan /wp/v2/pages
//    untuk penggunaan di frontend React (Berita & Edukasi)
// =====================================================================
function add_featured_image_url_to_rest_response() {
    // Untuk Post
    register_rest_field( 'post',
        'featured_image_url',
        array(
            'get_callback'    => function( $object, $field_name, $request ) {
                $image_id = get_post_thumbnail_id( $object['id'] );
                return $image_id ? wp_get_attachment_url( $image_id ) : null;
            },
            'update_callback' => null,
            'schema'          => null,
        )
    );
    // Untuk Page
    register_rest_field( 'page',
        'featured_image_url',
        array(
            'get_callback'    => function( $object, $field_name, $request ) {
                $image_id = get_post_thumbnail_id( $object['id'] );
                return $image_id ? wp_get_attachment_url( $image_id ) : null;
            },
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
add_action( 'rest_api_init', 'add_featured_image_url_to_rest_response' );


// =====================================================================
// 7. Modifikasi Menu Admin WordPress
//    Menghapus item menu yang tidak relevan.
// =====================================================================
function custom_remove_admin_menus() {
    // Contoh penghapusan menu standar yang mungkin tidak dibutuhkan
    // remove_menu_page( 'edit.php' );          // Posts
    // remove_menu_page( 'upload.php' );         // Media
    // remove_menu_page( 'edit.php?post_type=page' );  // Pages
    remove_menu_page( 'edit-comments.php' );        // Comments (biasanya tidak digunakan di headless WP)
    // remove_menu_page( 'themes.php' );         // Appearance
    // remove_menu_page( 'plugins.php' );        // Plugins
    // remove_menu_page( 'users.php' );          // Users
    // remove_menu_page( 'tools.php' );          // Tools
    // remove_menu_page( 'options-general.php' );    // Settings

    // Hapus menu yang mungkin dari plugin marketplace/e-commerce
    remove_menu_page( 'woocommerce' );             // WooCommerce main menu
    remove_menu_page( 'edit.php?post_type=product' ); // Products CPT menu
    remove_menu_page( 'edit.php?post_type=shop_order' ); // Orders CPT menu (WooCommerce)

    // Anda bisa menambahkan penghapusan menu lain jika diperlukan.
    // Untuk menemukan slug menu yang ingin dihapus, navigasikan ke halaman tersebut di admin WordPress,
    // lalu lihat URL-nya. Contoh: "edit.php?post_type=namacustomposttype".
}
add_action( 'admin_menu', 'custom_remove_admin_menus' );

// =====================================================================
// 8. Hapus widget dashboard yang tidak relevan
// =====================================================================
function custom_remove_dashboard_widgets() {
    global $wp_meta_boxes;

    // Menghapus widget standar yang jarang digunakan di headless setup
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);       // Activity
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);    // Recent Comments
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);          // WordPress Events and News
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);      // Quick Draft
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);      // At a Glance
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);     // Incoming Links (deprecated)
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);        // Plugins (sometimes added by plugins)

    // Menghapus widget yang mungkin dari plugin marketplace/e-commerce
    unset($wp_meta_boxes['dashboard']['normal']['core']['woocommerce_dashboard_status']); // WooCommerce Status
    unset($wp_meta_boxes['dashboard']['normal']['core']['woocommerce_dashboard_recent_orders']); // WooCommerce Recent Orders

    // Tambahkan baris di sini untuk menghapus widget lain yang tidak Anda inginkan.
    // Anda bisa menggunakan plugin seperti "Screen Options" atau menginspeksi elemen
    // untuk menemukan ID widget yang ingin dihapus.
}
add_action( 'wp_dashboard_setup', 'custom_remove_dashboard_widgets' );












