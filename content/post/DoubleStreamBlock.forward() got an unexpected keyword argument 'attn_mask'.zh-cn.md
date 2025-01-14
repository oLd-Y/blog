---
title: DoubleStreamBlock.forward() got an unexpected keyword argument 'attn_mask'
categories: 计算机
tags:
  - bug
  - ComfyUI
date: 2025-01-14
description: 
image: 
weight: 1
draft: false
lastmod: 2025-01-14T20:53:50+08:00
---
在运行到“自定义采样器（高级）”（SamplerCustomAdvanced）节点的时候出现了错误。该节点为 comfyui 官方插件中的节点。报错日志如下所示：

```
# ComfyUI Error Report
## Error Details
- **Node ID:** 13
- **Node Type:** SamplerCustomAdvanced
- **Exception Type:** TypeError
- **Exception Message:** DoubleStreamBlock.forward() got an unexpected keyword argument 'attn_mask'
## Stack Trace

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 323, in execute
    output_data, output_ui, has_subgraph = get_output_data(obj, input_data_all, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 198, in get_output_data
    return_values = _map_node_over_list(obj, input_data_all, obj.FUNCTION, allow_interrupt=True, execution_block_cb=execution_block_cb, pre_execute_cb=pre_execute_cb)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 169, in _map_node_over_list
    process_inputs(input_dict, i)

  File "D:\software\ComfyUI-aki-v1.5\execution.py", line 158, in process_inputs
    results.append(getattr(obj, func)(**inputs))

  File "D:\software\ComfyUI-aki-v1.5\comfy_extras\nodes_custom_sampler.py", line 633, in sample
    samples = guider.sample(noise.generate_noise(latent), latent_image, sampler, sigmas, denoise_mask=noise_mask, callback=callback, disable_pbar=disable_pbar, seed=noise.seed)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 740, in sample
    output = self.inner_sample(noise, latent_image, device, sampler, sigmas, denoise_mask, callback, disable_pbar, seed)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 719, in inner_sample
    samples = sampler.sample(self, sigmas, extra_args, callback, noise, latent_image, denoise_mask, disable_pbar)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 624, in sample
    samples = self.sampler_function(model_k, noise, sigmas, extra_args=extra_args, callback=k_callback, disable=disable_pbar, **self.extra_options)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\utils\_contextlib.py", line 116, in decorate_context
    return func(*args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\comfy\k_diffusion\sampling.py", line 155, in sample_euler
    denoised = model(x, sigma_hat * s_in, **extra_args)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 299, in __call__
    out = self.inner_model(x, sigma, model_options=model_options, seed=seed)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 706, in __call__
    return self.predict_noise(*args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 709, in predict_noise
    return sampling_function(self.inner_model, x, timestep, self.conds.get("negative", None), self.conds.get("positive", None), self.cfg, model_options=model_options, seed=seed)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 279, in sampling_function
    out = calc_cond_batch(model, conds, x, timestep, model_options)

  File "D:\software\ComfyUI-aki-v1.5\comfy\samplers.py", line 228, in calc_cond_batch
    output = model.apply_model(input_x, timestep_, **c).chunk(batch_chunks)

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI-Advanced-ControlNet\adv_control\utils.py", line 69, in apply_model_uncond_cleanup_wrapper
    return orig_apply_model(self, *args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\comfy\model_base.py", line 145, in apply_model
    model_output = self.diffusion_model(xc, t, context=context, control=control, transformer_options=transformer_options, **extra_conds).float()

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\nn\modules\module.py", line 1736, in _wrapped_call_impl
    return self._call_impl(*args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\nn\modules\module.py", line 1747, in _call_impl
    return forward_call(*args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\comfy\ldm\flux\model.py", line 184, in forward
    out = self.forward_orig(img, img_ids, context, txt_ids, timestep, y, guidance, control, transformer_options)

  File "D:\software\ComfyUI-aki-v1.5\custom_nodes\ComfyUI-PuLID-Flux-Enhanced\pulidflux.py", line 124, in forward_orig
    img, txt = block(img=img,

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\nn\modules\module.py", line 1736, in _wrapped_call_impl
    return self._call_impl(*args, **kwargs)

  File "D:\software\ComfyUI-aki-v1.5\python\lib\site-packages\torch\nn\modules\module.py", line 1747, in _call_impl
    return forward_call(*args, **kwargs)
```

出错的原因是 comfyui 与插件的版本不符。在[类似的 Issue](https://github.com/XLabs-AI/x-flux-comfyui/issues/160)下说要升级到 v0.3.7，而我升级到 v0.3.10 之后问题才得到解决。