const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Fade,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.gamepad,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.PlatformInfo,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.gamepad.Cnds.IsButtonDown,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.gamepad.Cnds.CompareAxis,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.gamepad.Cnds.OnButtonDown,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{Esmaecer: 0},
	{FundoInicio: 0},
	{Senóide: 0},
	{PlayVoltar: 0},
	{Áudio: 0},
	{Toque: 0},
	{Gamepad: 0},
	{FundoGame: 0},
	{Sólido: 0},
	{BlocoChao: 0},
	{BlocoAereo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Tonico: 0},
	{Teclado: 0},
	{Moeda: 0},
	{Pontos: 0},
	{Espinhos: 0},
	{FundoGameOver: 0},
	{CoracoesVidas: 0},
	{FundoYouWin: 0},
	{Portal: 0},
	{BotaoEsquerda: 0},
	{BotaoDireita: 0},
	{BotaoPular: 0},
	{InformaçãoDaPlataforma: 0},
	{pontos: 0},
	{vidas: 0}
];

self.InstanceType = {
	FundoInicio: class extends self.ITiledBackgroundInstance {},
	PlayVoltar: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Toque: class extends self.IInstance {},
	Gamepad: class extends self.IInstance {},
	FundoGame: class extends self.ITiledBackgroundInstance {},
	BlocoChao: class extends self.ITiledBackgroundInstance {},
	BlocoAereo: class extends self.ITiledBackgroundInstance {},
	Tonico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Pontos: class extends self.ITextInstance {},
	Espinhos: class extends self.ITiledBackgroundInstance {},
	FundoGameOver: class extends self.ITiledBackgroundInstance {},
	CoracoesVidas: class extends self.ISpriteInstance {},
	FundoYouWin: class extends self.ITiledBackgroundInstance {},
	Portal: class extends self.ISpriteInstance {},
	BotaoEsquerda: class extends self.ISpriteInstance {},
	BotaoDireita: class extends self.ISpriteInstance {},
	BotaoPular: class extends self.ISpriteInstance {},
	InformaçãoDaPlataforma: class extends self.IInstance {}
}