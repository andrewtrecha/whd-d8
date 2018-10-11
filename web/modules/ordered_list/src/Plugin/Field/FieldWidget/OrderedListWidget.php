<?php

namespace Drupal\ordered_list\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\OptionsWidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\ordered_list\Element\OrderedList;

/**
 * Plugin implementation of the 'ordered_list' widget.
 *
 * @FieldWidget(
 *   id = "ordered_list",
 *   label = @Translation("Ordered list"),
 *   field_types = {
 *     "entity_reference",
 *     "list_integer",
 *     "list_float",
 *     "list_string"
 *   },
 *   multiple_values = TRUE
 * )
 */
class OrderedListWidget extends OptionsWidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state) + [
      '#type' => 'ordered_list',
      '#options' => $this->getOptions($items->getEntity()),
      '#default_value' => $this->getSelectedOptions($items),
      '#labels' => $this->getSetting('labels'),
    ];
    if ($this->getSetting('hide_field_label')) {
      $element['#title_display'] = 'invisible';
    }
    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'hide_field_label' => FALSE,
      'labels' => OrderedList::defaultLabels(),
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $element['hide_field_label'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Hide field label'),
      '#default_value' => $this->getSetting('hide_field_label'),
    ];
    $titles = [
      'items_available' => $this->t('Available items label'),
      'items_selected' => $this->t('Selected items label'),
      'control_select' => $this->t('Select control label'),
      'control_deselect' => $this->t('Deselect control label'),
      'control_moveup' => $this->t('Move up control label'),
      'control_movedown' => $this->t('Move down control label'),
    ];
    $labels = $this->getSetting('labels');
    foreach (array_keys(OrderedList::defaultLabels()) as $key) {
      $element['labels'][$key] = [
        '#type' => 'textfield',
        '#title' => $titles[$key],
        '#default_value' => $labels[$key],
        '#required' => TRUE,
      ];
    }
    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $hide_label = $this->getSetting('hide_field_label');
    $summary[] = $this->t('Hide field label: @hide_field_label', [
      '@hide_field_label' => $hide_label ? $this->t('Yes') : $this->t('No'),
    ]);
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  protected function getEmptyLabel() {
    return NULL;
  }

}
