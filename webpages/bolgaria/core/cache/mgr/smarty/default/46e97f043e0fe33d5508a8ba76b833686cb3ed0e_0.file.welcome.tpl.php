<?php /* Smarty version 3.1.27, created on 2017-05-03 04:49:09
         compiled from "/home/veronikadmytryk/public_html/bolgaria/manager/templates/default/welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:103435008759096145673fd7_30773177%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '46e97f043e0fe33d5508a8ba76b833686cb3ed0e' => 
    array (
      0 => '/home/veronikadmytryk/public_html/bolgaria/manager/templates/default/welcome.tpl',
      1 => 1493151710,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '103435008759096145673fd7_30773177',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_59096145676d33_93188345',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_59096145676d33_93188345')) {
function content_59096145676d33_93188345 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '103435008759096145673fd7_30773177';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>