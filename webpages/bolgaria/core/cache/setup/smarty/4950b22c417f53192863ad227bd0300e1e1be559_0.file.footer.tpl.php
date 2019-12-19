<?php /* Smarty version 3.1.27, created on 2017-05-03 04:44:32
         compiled from "/home/veronikadmytryk/public_html/bolgaria/setup/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:86785872959096030ce9945_73505526%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4950b22c417f53192863ad227bd0300e1e1be559' => 
    array (
      0 => '/home/veronikadmytryk/public_html/bolgaria/setup/templates/footer.tpl',
      1 => 1493760432,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '86785872959096030ce9945_73505526',
  'variables' => 
  array (
    '_lang' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_59096030cf5763_35981966',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_59096030cf5763_35981966')) {
function content_59096030cf5763_35981966 ($_smarty_tpl) {
if (!is_callable('smarty_modifier_replace')) require_once '/home/veronikadmytryk/public_html/bolgaria/core/model/smarty/plugins/modifier.replace.php';

$_smarty_tpl->properties['nocache_hash'] = '86785872959096030ce9945_73505526';
?>
        </div>
        <!-- end content -->
        <div class="clear">&nbsp;</div>
    </div>
</div>

<!-- start footer -->
<div id="footer">
    <div id="footer-inner">
    <div class="container_12">
        <p><?php ob_start();
echo date('Y');
$_tmp1=ob_get_clean();
echo smarty_modifier_replace($_smarty_tpl->tpl_vars['_lang']->value['modx_footer1'],'[[+current_year]]',$_tmp1);?>
</p>
        <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['modx_footer2'];?>
</p>
    </div>
    </div>
</div>

<div class="post_body">

</div>
<!-- end footer -->
</body>
</html><?php }
}
?>