<?php
use Drupal\file\Entity\File;

function webpro_form_system_theme_settings_alter(&$form, &$form_state) {
  $form['site_colour_wrapper'] = array(
    '#type' => 'fieldset',
    '#title' => t('Site Colours'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['site_colour_wrapper']['highlight_color'] = array(
    '#type' => 'textfield',
    '#title' => t('Highlight Colour'),
    '#default_value' => theme_get_setting('highlight_color'),
    '#attributes' => array(
        'style' => 'background:' . theme_get_setting('highlight_color') . ';',
    ),
  );

  $form['webpro_menu']['webpro_menu_image'] = array(
    '#type' => 'managed_file',
    '#title' => t('Menu Image'),
    '#required' => FALSE,
    '#upload_location' => 'public://',
    '#default_value' => theme_get_setting('webpro_menu_image'),
    '#upload_validators' => array(
      'file_validate_extensions' => array('png jpg jpeg'),
    ),
  );

  $form['webpro_menu']['webpro_menu_footer_text'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Menu Footer Text'),
    '#default_value'  => theme_get_setting('webpro_menu_footer_text'),
  );

  $form['webpro_menu']['webpro_menu_footer_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Menu Footer Link'),
    '#default_value'  => theme_get_setting('webpro_menu_footer_link'),
  );

  $form['webpro_contact']['webpro_address'] = array(
    '#type'           => 'textarea',
    '#title'          => t('Address'),
    '#default_value'  => theme_get_setting('webpro_address'),
  );
  $form['webpro_contact']['webpro_email'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Email'),
    '#default_value'  => theme_get_setting('webpro_email'),
  );
  $form['webpro_contact']['webpro_contact_number'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Contact Number'),
    '#default_value'  => theme_get_setting('webpro_contact_number'),
  );

  $form['webpro_social_link'] = array(
    '#type'         => 'fieldset',
    '#title'        => t('Social Info'),
    '#description'  => t('Social information to display in the footer'),
    '#weight'       => -999,
    '#open'         => TRUE,
    );

  $form['webpro_social_link']['webpro_facebook_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Facebook Link'),
    '#default_value'  => theme_get_setting('webpro_facebook_link'),
  );

  $form['webpro_social_link']['webpro_twitter_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Twitter Link'),
    '#default_value'  => theme_get_setting('webpro_twitter_link'),
  );
  $form['webpro_social_link']['webpro_linkedin_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Linkedin Link'),
    '#default_value'  => theme_get_setting('webpro_linkedin_link'),
  );
  $form['webpro_social_link']['webpro_instagram_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Instagram Link'),
    '#default_value'  => theme_get_setting('webpro_instagram_link'),
  );
  $form['webpro_social_link']['webpro_medium_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Medium Link'),
    '#default_value'  => theme_get_setting('webpro_medium_link'),
  );

  $form['#submit'][] = 'custom_image_save';
  return $form;

}

function custom_image_save(&$form, &$form_state) {

  $fid = $form_state->getValue('webpro_menu_image');
  $file = File::load($fid[0]);
  $file->setPermanent();
  $file->save();
}

