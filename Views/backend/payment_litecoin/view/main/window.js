/*
 * (c) LX <lxhost.com@gmail.com>
 * (c) 2017 Miguel Padilla <miguel.padilla@zwilla.de>
 * Donations: B_C_H:1L81xy6FoMHpNWxFtKTKGbsz9Sye1sSpSp BTC:1kD11aS83Du87EigaCodD8HVYmurHgT6i  ETH:0x8F2E4fd2f76235f38188C2077978F3a0B278a453
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentLiteCoin.view.main.Window', {
    extend: 'Enlight.app.Window',
    alias: 'widget.litecoin-main-window',

    width: 1200,
    height: 500,
    layout: 'border',

    title: '{s name=window/title}LiteCoin Payments{/s}',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: me.getItems()
        });

        me.callParent(arguments);
    },

    getItems: function() {
        var me = this;
        return [{
            region: 'east',
            xtype: 'litecoin-main-detail'
        }, {
            region: 'center',
            xtype: 'litecoin-main-list'
        }];
    }
});