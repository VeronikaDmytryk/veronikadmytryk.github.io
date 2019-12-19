<?php /* Smarty version 3.1.27, created on 2017-05-16 17:41:41
         compiled from "/home/veronikadmytryk/public_html/bolgaria/manager/templates/default/element/snippet/create.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:199117867591b39d512ec24_06565500%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6a6fad4a5d7bb50a08e31af550b71110819d6d4d' => 
    array (
      0 => '/home/veronikadmytryk/public_html/bolgaria/manager/templates/default/element/snippet/create.tpl',
      1 => 1493151712,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '199117867591b39d512ec24_06565500',
  'variables' => 
  array (
    'onSnipFormPrerender' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_591b39d5133cf4_38177975',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_591b39d5133cf4_38177975')) {
function content_591b39d5133cf4_38177975 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '199117867591b39d512ec24_06565500';
?>
<div id="modx-panel-snippet-div"></div>
<?php echo $_smarty_tpl->tpl_vars['onSnipFormPrerender']->value;

}
}
?>