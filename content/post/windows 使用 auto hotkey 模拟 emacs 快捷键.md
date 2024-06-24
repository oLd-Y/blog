---
tags: 
draft: true
lastmod: 2024-04-30T13:32:46+08:00
title: windows 使用 auto hotkey 模拟 emacs 快捷键
date: 2024-04-30
---
```ahk
;;
;; An autohotkey script that provides emacs-like keybinding on Windows
;;

#Requires AutoHotkey v2.0

;; global constants
DEBUG_MODE := 0

;; global variables
; turns to be 1 when ctrl-x is pressed
gIsCtrlXPressed := 0
; turns to be 1 when ctrl-space is pressed
gIsMarkDown := 0
; turns to be 1 when escape key is pressed
gIsEscapePressed := 0
; turns to be 1 when Ctrl-s, Ctrl-r
gIsSearching := 0

reset_pre_keys()
{
  global
  gIsCtrlXPressed := 0
  gIsMarkDown := 0
  gIsEscapePressed := 0
  Return
}
reset_all_status()
{
  reset_pre_keys()
  global gIsSearching := 0
}
delete_char()
{
  Send "{Del}"
  reset_all_status()
  Return
}
delete_backward_char()
{
  Send "{BS}"
  reset_all_status()
  Return
}
kill_line()
{
  Send "{ShiftDown}{END}{ShiftUp}"
  Sleep 50 ;[ms] this value depends on your environment
  A_Clipboard := "" ; set empty
  Send "^x"
  ClipWait(0.1) ; wait for copy finish
  text := A_Clipboard ; get the copied text

  ;; if start pos is at line end (text is empty)
  if (text = "") {
    Send "{ShiftDown}{Right}{ShiftUp}"
    Sleep 50 ;[ms] this value depends on your environment
    Send "^x"
  }

  reset_all_status()
  Return
}
open_line()
{
  Send "{END}{Enter}{Up}"
  reset_all_status()
  Return
}
quit()
{
  Send "{ESC}"
  reset_all_status()
  Return
}
newline()
{
  Send "{Enter}"
  reset_all_status()
  Return
}
indent_for_tab_command()
{
  Send "{Tab}"
  reset_all_status()
  Return
}
newline_and_indent()
{
  Send "{Enter}{Tab}"
  reset_all_status()
  Return
}
isearch_forward()
{
  global
  If gIsSearching
    Send "{F3}"
  Else
  {
    Send "^f"
    gIsSearching := 1
  }
  reset_pre_keys()
  Return
}
isearch_backward()
{
  global
  If gIsSearching
    Send "+{F3}"
  Else
  {
    Send "^f"
    gIsSearching := 1
  }
  reset_pre_keys()
  Return
}
kill_region()
{
  Send "^x"
  reset_all_status()
  Return
}
kill_ring_save()
{
  Send "^c"
  reset_all_status()
  Return
}
yank()
{
  Send "^v"
  reset_all_status()
  Return
}
undo()
{
  Send "^z"
  reset_all_status()
  Return
}
find_file()
{
  Send "^o"
  reset_all_status()
  Return
}
save_buffer()
{
  Send "^s"
  reset_all_status()
  Return
}
kill_window()
{
  Send "!{F4}"
  reset_all_status()
  Return
}
kill_buffer()
{
  Send "^w"
  reset_all_status()
  Return
}
move_beginning_of_line()
{
  global
  If gIsMarkDown
    Send "+{HOME}"
  Else
  {
    Send "{HOME}"
    reset_all_status()
  }
  Return
}
move_end_of_line()
{
  global
  If gIsMarkDown
    Send "+{END}"
  Else
  {
    Send "{END}"
    reset_all_status()
  }
  Return
}
previous_line()
{
  global
  If gIsMarkDown
    Send "+{Up}"
  Else
  {
    Send "{Up}"
    reset_all_status()
  }
  Return
}
next_line()
{
  global
  If gIsMarkDown
    Send "+{Down}"
  Else
  {
    Send "{Down}"
    reset_all_status()
  }
  Return
}
forward_char()
{
  global
  If gIsMarkDown
    Send "+{Right}"
  Else
  {
    Send "{Right}"
    reset_all_status()
  }
  Return
}
backward_char()
{
  global
  If gIsMarkDown
    Send "+{Left}"
  Else
  {
    Send "{Left}"
    reset_all_status()
  }
  Return
}
scroll_up()
{
  global
  If gIsMarkDown
    Send "+{PgUp}"
  Else
  {
    Send "{PgUp}"
    reset_all_status()
  }
  Return
}
scroll_down()
{
  global
  If gIsMarkDown
    Send "+{PgDn}"
  Else
  {
    Send "{PgDn}"
    reset_all_status()
  }
  Return
}
; https://qiita.com/c-nuts/items/20d02e572b6a06d5dce7
ime_switch()
{
  global
  Send "{vkF3sc029}"
  reset_all_status()
  Return
}
pageup_top()
{
  global
  If gIsMarkDown
    Send "+^{Home}"
  Else
  {
    Send "^{Home}"
    reset_all_status()
  }
  Return
}
pagedown_bottom()
{
  global
  If gIsMarkDown
    Send "+^{End}"
  Else
  {
    Send "^{End}"
    reset_all_status()
  }
  Return
}
set_ignore_targets() {
  ; Applications you want to disable emacs-like keybindings
  ; (Please comment out applications you don't use)
  GroupAdd "IgnoreTargets", "ahk_class ConsoleWindowClass" ; Cygwin, Ubuntu
  GroupAdd "IgnoreTargets", "ahk_class cygwin/x X rl-xterm-XTerm-0"
  GroupAdd "IgnoreTargets", "ahk_class VMwareUnityHostWndClass"
  GroupAdd "IgnoreTargets", "ahk_class Vim" ; GVIM
  GroupAdd "IgnoreTargets", "ahk_class Emacs" ; NTEmacs
  GroupAdd "IgnoreTargets", "ahk_class XEmacs" ; XEmacs on Cygwin
  GroupAdd "IgnoreTargets", "ahk_exe vcxsrv.exe" ; gnome-terminal
  GroupAdd "IgnoreTargets", "ahk_exe xyzzy.exe" ; xyzzy
  GroupAdd "IgnoreTargets", "ahk_exe putty.exe" ; PuTTY
  GroupAdd "IgnoreTargets", "ahk_exe ttermpro.exe" ; TeraTerm
  GroupAdd "IgnoreTargets", "ahk_exe TurboVNC.exe" ; VNC
  GroupAdd "IgnoreTargets", "ahk_exe vncviewer.exe" ; VNC
}


main() {
  if (DEBUG_MODE > 0)
    InstallKeybdHook

  ;; Disable log
  ListLines 0

  ;; Disable delay
  SetControlDelay 0
  ;; SetKeyDelay 0
  SetKeyDelay -1 ;; disable key delay
  SetWinDelay 0
  SendMode "Input"
  ;;SendMode "Play"

  set_ignore_targets()
}

main()

#UseHook

;; Set suspend toggle key
#SuspendExempt
^F1::Suspend
#SuspendExempt False

#HotIf not WinActive("ahk_group IgnoreTargets")
^x::global gIsCtrlXPressed := 1
Esc::
{
  global
  If gIsEscapePressed
  {
    Send "{Esc}"
    gIsEscapePressed := 0
  }
  Else
    gIsEscapePressed := 1
  Return
}
^f::
{
  global
  If gIsCtrlXPressed
    find_file()
  Else
    forward_char()
  Return
}
^c::
{
  global
  If gIsCtrlXPressed
    kill_window()
  Return
}
^d::delete_char()
^h::delete_backward_char()
^k::kill_line()
k::
{
  global
  If gIsCtrlXPressed
    kill_buffer()
  Else
    Send A_ThisHotkey
  Return
}
;;^o::open_line()
^o::ime_switch()
; Ctrl-\ (Backslash) vkE2sc073 SC02B
;^\::
;^vkE2sc073::
^vkE2::ime_switch()
^g::quit()
^j::newline_and_indent()
^m::newline()
^i::indent_for_tab_command()
^s::
{
  global
  If gIsCtrlXPressed
    save_buffer()
  Else
    isearch_forward()
  Return
}
^r::isearch_backward()
^w::kill_region()
!w::kill_ring_save()
w::
{
  global
  If gIsEscapePressed
    kill_ring_save()
  Else
    Send A_ThisHotkey
  Return
}
^y::yank()
^/::undo()
;; ^{Space}::
;; ^vk20sc039::
^vk20::
{
  global
  If gIsMarkDown
    gIsMarkDown := 0
  Else
    gIsMarkDown := 1
  Return
}
^a::move_beginning_of_line()
^e::move_end_of_line()
^p::previous_line()
^n::next_line()
^b::backward_char()
^v::scroll_down()
!v::scroll_up()
v::
{
  global
  If gIsEscapePressed
    scroll_up()
  Else
    Send A_ThisHotkey
  Return
}
!<::pageup_top()
<::
{
  global
  If gIsEscapePressed
    pageup_top()
  Else
    Send A_ThisHotkey
  Return
}
!>::pagedown_bottom()
>::
{
  global
  If gIsEscapePressed
    pagedown_bottom()
  Else
    Send A_ThisHotkey
  Return
}
```

