(function (_0x1d8201, _0x156683) { const _0x43c6dc = _0x14d8, _0x2c73b7 = _0x1d8201(); while (!![]) { try { const _0x2f145f = parseInt(_0x43c6dc(0x11c)) / 0x1 * (-parseInt(_0x43c6dc(0x108)) / 0x2) + -parseInt(_0x43c6dc(0x115)) / 0x3 * (-parseInt(_0x43c6dc(0x11b)) / 0x4) + parseInt(_0x43c6dc(0x10a)) / 0x5 + -parseInt(_0x43c6dc(0x114)) / 0x6 * (parseInt(_0x43c6dc(0x119)) / 0x7) + parseInt(_0x43c6dc(0x116)) / 0x8 * (parseInt(_0x43c6dc(0x113)) / 0x9) + parseInt(_0x43c6dc(0x112)) / 0xa * (-parseInt(_0x43c6dc(0x10b)) / 0xb) + -parseInt(_0x43c6dc(0x120)) / 0xc * (-parseInt(_0x43c6dc(0x10e)) / 0xd); if (_0x2f145f === _0x156683) break; else _0x2c73b7['push'](_0x2c73b7['shift']()); } catch (_0x584afb) { _0x2c73b7['push'](_0x2c73b7['shift']()); } } }(_0x1a97, 0x74766)); import _0x16454e from '../../database'; function _0x1a97() { const _0x34307c = ['1420222fwvEcW', 'count', '801685QCwktM', '11MJKaDW', 'SELECT\x20SUM(remuneration)\x20as\x20remuneration\x20,date\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20histo_offers\x20WHERE\x20idUser=\x22', 'SELECT\x20SUM(amount)\x20as\x20remuneration\x20,date\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20commandes\x20WHERE\x20userID=\x22', '52GrbXKP', '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20etat=\x22PENDING\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x20date\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20STR_TO_DATE(date,\x20\x27%m/%d/%Y\x27)\x20ASC', '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20status=\x22ACCEPTED\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x20date\x20order\x20by\x20STR_TO_DATE(date,\x20\x27%m/%d/%Y\x27)\x20ASC', 'SELECT\x20euros\x20as\x20count\x20FROM\x20users\x20WHERE\x20hashId=\x22', '4834910BtFDTN', '63pSWihl', '45966hkEkKn', '12NxYjzG', '291464GKyPrc', 'SELECT\x20SUM(remuneration)\x20as\x20count\x20FROM\x20histo_offers\x20WHERE\x20idUser=\x22', '\x22\x20AND\x20etat=\x22PENDING\x22', '112dUGFxT', '\x22\x20AND\x20etat\x20=\x20\x27ACCEPTED\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x20date\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20STR_TO_DATE(date,\x20\x27%m/%d/%Y\x27)\x20ASC', '647096hhTMvM', '1MMsjWE', 'SELECT\x20COUNT(*)\x20as\x20count\x20FROM\x20commandes\x20WHERE\x20userID=\x22', 'SELECT\x20SUM(remuneration)\x20as\x20remuneration,\x20date\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20histo_offers\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20idUser=\x22', 'Erreur\x20lors\x20de\x20la\x20création', '2192232uJorfE']; _0x1a97 = function () { return _0x34307c; }; return _0x1a97(); } function _0x14d8(_0x3fce45, _0x203e8c) { const _0x1a97c1 = _0x1a97(); return _0x14d8 = function (_0x14d8a8, _0x4040d4) { _0x14d8a8 = _0x14d8a8 - 0x108; let _0x1ff87f = _0x1a97c1[_0x14d8a8]; return _0x1ff87f; }, _0x14d8(_0x3fce45, _0x203e8c); } export async function getStatistique(_0x2c309d) { const _0x22e598 = _0x14d8; try { const _0x27ba10 = await _0x16454e({ 'query': _0x22e598(0x111) + _0x2c309d + '\x22' }), _0x3d900b = await _0x16454e({ 'query': _0x22e598(0x117) + _0x2c309d + _0x22e598(0x118) }), _0x2dd580 = await _0x16454e({ 'query': _0x22e598(0x11d) + _0x2c309d + '\x22\x20AND\x20status=\x22ACCEPTED\x22' }), _0x54d522 = await _0x16454e({ 'query': _0x22e598(0x11e) + _0x2c309d + _0x22e598(0x11a) }), _0x5140ba = await _0x16454e({ 'query': _0x22e598(0x10c) + _0x2c309d + _0x22e598(0x10f) }), _0xc95317 = await _0x16454e({ 'query': _0x22e598(0x10d) + _0x2c309d + _0x22e598(0x110) }); return { 'total': { 'gain': _0x27ba10[0x0][_0x22e598(0x109)], 'attente': _0x3d900b[0x0]['count'], 'commande': _0x2dd580[0x0][_0x22e598(0x109)] }, 'mission': { 'accepted': _0x54d522, 'pending': _0x5140ba, 'commande': _0xc95317 } }; } catch (_0x98b61f) { return { 'error': _0x98b61f, 'message': _0x22e598(0x11f), 'success': ![] }; } }
