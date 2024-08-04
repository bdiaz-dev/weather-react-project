export default function MenuButton ({
  openMenu,
  buttonRef
}) {
  return (
    <button
      id='menuButton'
      aria-label='Toggle menu'
      ref={buttonRef}
      onClick={openMenu}
    >
      <span />
      <span />
      <span />
    </button>
  )
}
