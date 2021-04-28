<?php
namespace Drupal\api;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Plugin\PluginFormInterface;

class ArdenLayoutClass extends LayoutDefault implements PluginFormInterface {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'full_width' => FALSE,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['full_width'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Full width'),
      '#default_value' => $this->configuration['full_width'],
    ];
    return $form;
  }

  /**
   * @inheritdoc
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
    // any additional form validation that is required
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    $this->configuration['full_width'] = $form_state->getValue('full_width');
  }

}
